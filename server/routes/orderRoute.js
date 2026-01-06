import express from 'express';
import authUser from '../middlewares/authUser.js';
import { getAllOrders, getUserOrders, PlaceOrderCOD } from '../controllers/orderController.js';
import authSeller from '../middlewares/authSeller.js';


const orderRouter = express.Router();

orderRouter.post('/cod', authUser, PlaceOrderCOD)
orderRouter.get('/user', authUser, getUserOrders)
orderRouter.get('/seller', authSeller, getAllOrders)

export default orderRouter;