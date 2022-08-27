import mongoose from "mongoose";

const schemaCapacity = {
    description: String,
    bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
    },
    date: Date,
    capacity_tran: Number,
    capacity_no_tran: Number,
    capacity_int: Number,
    capacity_atm: Number,
    capacity_queue: Number,
};

const Capacity = mongoose.model("Capacity", schemaCapacity, "capacity");

export default Capacity;