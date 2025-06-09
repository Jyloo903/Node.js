const express = require('express');
const router = express.Router();
const top_customersController = require('../controllers/top_customersController');
const protectTop_Customers = require('../middleware/authMiddleware');

/** User **/
/*router.post('/register', userController.register);
router.post('/login', userController.login);**/
router.get('/top_Customers', protectTop_Customers, top_customersController.getAll);
router.get('/top_Customers/:id', protectTop_Customers, top_customersController.getOne);
router.put('/top_Customers/:id', protectTop_Customers, top_customersController.update);
router.delete('/top_Customers/:id', protectTop_Customers, top_customersController.remove);
/** **/

module.exports = router;