const schemaBank = {
    codeBank: String,
    name: String,
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "District",
    },
    capacity: Number,
    category: String,
    image: String,
    address: String
};

const Bank = mongoose.model("Bank", schemaBank, "banks");

export default Bank;