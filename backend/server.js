import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//created a route and adding now
import productRoutes from './routes/products.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//As we have added prefix products in here all will to get /post requests like
//http://localhost:5000/products
app.use('/products', productRoutes);
//mongoose.Promise = global.Promise;
const CONNECTION_URL = 'mongodb+srv://simmi_agrawal:4VZUgaEHRHEAmy7@cluster0.ufxjo.mongodb.net/myproducts?retryWrites=true&w=majority';
//const CONNECTION_URL = 'mongodb://127.0.0.1:27017/products';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  mongoose.set('useFindAndModify', false);
//app.listen(5000);