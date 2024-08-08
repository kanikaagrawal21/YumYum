import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, requrired: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, reruired: true },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
