import mongoose from "mongoose";

const schemaCapacity = {
    bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
    },
    date: Date,
    capacityNormalWindow: Number,
    capacityNormalPlatform: Number,
    capacityPrefWindow: Number,
    capacityPrefPlatform: Number,
    capacityTranQueue: Number,
    capacityAtmQueue: Number,
    capacityAtm: Number,
};

const Capacity = mongoose.model("Capacity", schemaCapacity, "capacity");

export default Capacity;