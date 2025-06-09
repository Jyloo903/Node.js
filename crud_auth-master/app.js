require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes');
const top_customersRoutes = require('./routes/top_customersRoutes');

app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', top_customersRoutes);
app.use('/api', productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));