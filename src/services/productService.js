import axios from "axios";
class ProductService {
    static getAllProducts = () => axios.get('/products');
    static getSingleProduct = (id) => axios.get(`/products/${id}`)
}


export default ProductService;