const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes'); 
const app = express();
app.use(express.json());

app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Servidor on ${PORT}`));
}).catch(error => console.log('Erro no db:', error));
