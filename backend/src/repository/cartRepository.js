const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/shoppingCart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: Number,
    name: String,
    label: String,
    price: Number,
    quantity: Number,
    imgUrl: String,
  },
  { versionKey: false }
);

const productSchemaModel = mongoose.model('productSchemaModel', productSchema);
exports.productSchemaModel = productSchemaModel;
