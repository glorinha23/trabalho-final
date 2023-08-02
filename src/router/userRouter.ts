const express = require('express');

import userController from "../controller/userController";

const router = express.Router();

router.get('/clients_ecommerce', userController.getUser);

router.post('/clients_ecommerce', userController.postUser);

router.put('/client_ecommerce/:id', userController.putUser);

router.delete('/client_ecommerce/:id', userController.deleteUser);

export default router;