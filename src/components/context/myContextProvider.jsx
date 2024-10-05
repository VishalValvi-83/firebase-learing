import { useEffect, useState } from "react";
import context from "./context";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, QuerySnapshot, setDoc, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../firebase/firebaseconfig";

const myContextProvider = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        imageURL: "",
        category: "",
        time: Timestamp.now(),
        date: new Date().toLocaleDateString(
            "en-us", {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        }
        )
    })

    // Add Product
    const AddProduct = async (e) => {
        e.preventDefault();

        //product reference 
        const productRef = collection(db, "products")
        try {
            await addDoc(productRef, product)
            getProducts()
            toast.success(("added"))
            setTimeout(() => {
                window.location.href = "/"
            }, 1000);
            setProduct('')
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }


    }

    // get Product
    const [allProducts, setAllProducts] = useState([])
    const getProducts = async () => {

        try {
            const q = query(
                collection(db, "products"),
                orderBy('time')
            )
            // const data = await getDocs(productsRef)
            // setAllProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productsArray = []

                QuerySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id })
                })
                setAllProducts(productsArray)
            })
            return () => data;

        } catch (error) {
            console.log(error)
        }
    }


    //update/edit product
    // const [updateProduct, setUpdateProduct] = useState({})
    const updateProducthandle = async (item) => setProduct(item)

    const updateProduct = async (e) => {
        e.preventDefault()
        try {
            await setDoc(doc(db, 'products', product.id), product)
            getProducts();
            setTimeout(() => {
                window.location.href = "/"
            }, 1000);
            toast.success("Updated")
            alert("updated")
            setProduct("")
        } catch (error) {
            console.log(error)
            alert(error.message)

        }
    }



    //delete product 
    const delProduct = async (item) => {
        try {
            await deleteDoc(doc(db, 'products', item.id))
            getProducts();
            toast.loading("Deleting..")
            setTimeout(() => {
                toast.dismiss()
                toast.success("Deleted")
                window.location.href = "/"
            }, 1000);
        } catch (error) {

        }
    }


    //searching
    const [search, setSearch] = useState("")


    useEffect(() => {
        getProducts();
    }, [])

    return (
        <context.Provider value={{ product, setProduct, setAllProducts, allProducts, AddProduct, updateProduct, updateProducthandle, delProduct, search, setSearch }}>
            {props.children}
        </context.Provider>
    )

}

export default myContextProvider;
