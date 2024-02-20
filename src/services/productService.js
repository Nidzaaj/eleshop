import axios from "axios";
class ProductService {
    static getAllProducts = () => axios.get('/products');

}


export default ProductService;