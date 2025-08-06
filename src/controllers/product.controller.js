// controllers/product.controller.js
const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

//Validar productos antes de crearlos

exports.create = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price || !description) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};


/* 
exports.create = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error al crear producto' });
  }
};*/

exports.getOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error al obtener producto' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error al eliminar producto' });
  }
};
