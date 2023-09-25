import express from "express";

import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/thread.js";
import { showUsers, showUserById, createUser, updateUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get('/products', showProducts);

router.get('/products/:id', showProductById);

router.post('/products', createProduct);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);

//user 
router.get('/users', showUsers);

router.get('/users/:id', showUserById);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;