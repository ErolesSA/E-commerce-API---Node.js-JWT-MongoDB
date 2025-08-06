const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product.controller');
const protect = require('../middlewares/authMiddleware');


//router.get('/ping', (req, res) => {
//  res.json({ msg: 'pong 🏓' });
//});

router.get('/', productCtrl.getAll);
router.post('/',protect, productCtrl.create); // 🔐 protegida
router.get('/:id', productCtrl.getOne);
router.delete('/:id',protect, productCtrl.remove); // 🔐 protegida


module.exports = router;
