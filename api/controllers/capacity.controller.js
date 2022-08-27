import { Capacity } from "../models/_index.js";
import { createResponse } from "../utils/response.js";
import { Server } from "socket.io";

export const listById = async (req, res) => {
  try {
    const { _id: _id } = req.query;
    let capacity = await Capacity.findById(_id);
    res.json(createResponse(1, "Aforo encontrado", capacity));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const listAll = async (req, res) => {
  try {
    let capacitys = await Capacity.find();
    res.json(createResponse(1, "Aforos encontrados", capacitys));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const create = async (req, res) => {
  try {
    const capacity = new Capacity(req.body);
    const capacitySave = await capacity.save();
    res.json(createResponse(1, "Registro exitoso", capacitySave));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const update = async (req, res) => {
  try {
    let capacity = await Capacity.findById(req.body._id);
    capacity.description = req.body.description;
    const capacitySave = await capacity.save();
    res.json(createResponse(1, "Actualización exitosa", capacitySave));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const remove = async (req, res) => {
  try {
    const { _id: _id } = req.query;
    const capacity = await Capacity.findById(_id);
    const capacityDelete = await Capacity.deleteOne({ _id: _id });
    res.json(createResponse(1, "Eliminación exitosa", null));
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

/*const io = new Server(server, {
  cors: {
    origin: process.env.REACT_APP_AFORO_URL,
    methods: ["GET", "POST"]
  }
});*/

// Emit capacity by ticket
export const emitCapacityByTicket = async (req, res) => {
  try {
    const capacityByNormalTran = req.body.quantity;
    const capacityByPreferenceTran = req.body.preferenceQuantity;
    //to-do
    console.log("Enviar data");
    //io.emit("Send Capacity by Ticket " + req.body.idBank, { capacityTran: capacityByNormalTran, capacityPrefTran: capacityByPreferenceTran });
    res.json(createResponse(1, "Registro exitoso", { capacityTran: capacityByNormalTran, capacityPrefTran: capacityByPreferenceTran }));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

// Emit capacity by sensor
export const emitCapacityBySensor = async (req, res) => {
  try {
    const capacityInt = req.body.quantity;
    //to-do
    console.log("Enviar data");
    //io.emit("Send Capacity by Sensor " + req.body.idBank, { capacityInt: capacityInt });
    res.json(createResponse(1, "Registro exitoso", { capacityInt: capacityInt }));
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

// Emit capacity by camera1
export const emitCapacityByCamera1 = async (req, res) => {
  try {
    const capacityByCamera1 = req.body.quantity;
    //to-do
    console.log("Enviar data");
    //io.emit("Send Capacity by Camera 1" + req.body.idBank, { capacityInt: capacityByCamera1 }) ;
    res.json(createResponse(1, "Registro exitoso", { capacityInt: capacityByCamera1 }));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

//Emit capacity by camera2
export const emitCapacityByCamera2 = async (req, res) => {
  try {
    const capacityByCamera2 = req.body.quantity;
    //to-do
    console.log("Enviar data");
    //io.emit("Send Capacity by Camera 2" + req.body.idBank, { capacityAtm: capacityByCamera2 }) ;
    res.json(createResponse(1, "Registro exitoso", { capacityAtm: capacityByCamera2 }));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

// Emit capacity by camera3
export const emitCapacityByCamera3 = async (req, res) => {
  try {
    const capacityByCamera3Atm = req.body.quantityAtm;
    const capacityByCamera3Tran = req.body.quantityTran;

    //to-do
    console.log("Enviar data");
    //io.emit("Send Capacity by Camera 3" + req.body.idBank, { capacityQueueAtm: capacityByCamera3Atm, capacityQueueTran: capacityByCamera3Tran });
    res.json(createResponse(1, "Registro exitoso", { capacityByCamera3Atm, capacityByCamera3Tran }));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};
