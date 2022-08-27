import mongoose from "mongoose";

const schemaCapacity = {
    bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
    },
    date: Date,
    capacity_tran: Number, // ticket{movement}
    capacity_no_tran: Number, // capacity_no_tran = capacity_int-capacity_tran
    capacity_int: Number, // camera1{quantity}
    capacity_atm: Number, // camera2{quantity}
    capacity_queue: Number, // camera3{quantity}
};

const Capacity = mongoose.model("Capacity", schemaCapacity, "capacity");

export default Capacity;