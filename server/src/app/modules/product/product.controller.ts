import { Request, Response } from "express";
import { productsService } from "./product.service";

const createProductController = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const product = await productsService.createProduct(data);
    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error!",
      error: err,
    });
  }
};
const getAllProductsHandler = async (req: Request, res: Response) => {
  try {
    const products = await productsService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products data retrived successfully!",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error!",
      error: err,
    });
  }
};

const getProductByIdHandler = async (req: Request, res: Response) => {
  try {
    const product = await productsService.getProductById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product data retrived successfully!",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error!",
      error: err,
    });
  }
};

export const productsController = {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductController,
};
