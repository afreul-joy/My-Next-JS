import { useRouter } from 'next/router';    // hooks into router

const productDetail = () => {
    const router = useRouter()
    const id = router.query.productID  // productID = [productID] in file
    return (
        <div>
            <h1> Details of the product {id} </h1>
        </div>
    );
};

export default productDetail;