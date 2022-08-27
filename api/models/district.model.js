import mongoose from "mongoose";

const schemaDisctrict = {
  description: String,
};

const District = mongoose.model("Distric", schemaDisctrict, "districts");

export default District;
