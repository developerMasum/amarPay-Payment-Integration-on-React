import Product from "./product.model";
const createProduct = async (data: any) => {
    return await Product.create(data);
}
const getAllProducts = async () => {
    return await Product.find();
};

const getProductById = async (id: string) => {
    return await Product.findById(id);
};




export const productsService = {
    getAllProducts,
    getProductById,
    createProduct
}
