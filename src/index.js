require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.routes');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/auth.routes');


const app = express();
const PORT = process.env.PORT || 5000;

//console.log("MONGO_URI leída:", process.env.MONGO_URI);
connectDB(); 

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

app.use(errorHandler);

app.use('/api/auth', authRoutes);

