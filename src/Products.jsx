import { useEffect, useState } from "react"

const Products = () => {
    const [products,setProducts] = useState([])
    const getProduct = async () => {
        const response = await fetch("https://dummyjson.com/products").then((res)=>res.json()).then((res)=>res)
        setProducts(response.products)
        console.log("response",response)
    }
    useEffect(()=>{
       getProduct() 
    },[])
    return (
        <div>
            {
                products.map((item)=>{
                    return (<div>
                        <div>{item?.title}</div>
                    </div>)
                })
            }
        </div>
    )
}

export default Products