import express from 'express';
import { upload } from '../configs/multer.js';
import authSeller from '../middlewares/authSeller.js';
import { addProduct, changeStock, productById, productlist } from '../controllers/poductController.js';

const productRouter = express.Router();

productRouter.post('/add', upload.array('images'), authSeller, addProduct);
productRouter.get('/list', productlist)
productRouter.get('/id', productById)
productRouter.post('/stock', authSeller, changeStock)


export default productRouter;