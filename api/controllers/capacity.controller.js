import { Capacity } from "../models/_index.js";
import { createResponse } from "../utils/response.js";
import app from "../../server.js";

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

// Emit capacity by ticket
export const emitCapacityByTicket = async (req, res) => {
  try {
    const capacity = {
      capacityNormalWindow: req.body.normalWindowQuantity,
      capacityNormalPlatform: req.body.normalPlatformQuantity,
      capacityPrefWindow: req.body.prefWindowQuantity,
      capacityPrefPlatform: req.body.prefPlatformQuantity
    }
    app.emit('emitSocket', {message: `Send Capacity by Ticket ${req.body.idBank}`, data: capacity});
    res.json(createResponse(1, "Registro exitoso", capacity));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

// Emit capacity by sensor
export const emitCapacityBySensor = async (req, res) => {
  try {
    const capacitySensorInt = req.body.quantity;
    app.emit('emitSocket', {message: `Send Capacity by Sensor ${req.body.idBank}`, data: { capacitySensorInt: capacitySensorInt }});
    res.json(createResponse(1, "Registro exitoso", { capacitySensorInt: capacitySensorInt }));
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

// Emit capacity by camera1
export const emitCapacityByCamera1 = async (req, res) => {
  try {
    const capacityInt = req.body.quantity;
    app.emit('emitSocket', {message: `Send Capacity by Camera 1 ${req.body.idBank}`, data: { capacityInt: capacityInt }});
    res.json(createResponse(1, "Registro exitoso", { capacityInt: capacityInt }));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

//Emit capacity by camera2
export const emitCapacityByCamera2 = async (req, res) => {
  try {
    const capacityAtm = req.body.quantity;
    app.emit('emitSocket', {message: `Send Capacity by Camera 2 ${req.body.idBank}`, data: { capacityAtm: capacityAtm }});
    res.json(createResponse(1, "Registro exitoso", { capacityAtm: capacityAtm }));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

// Emit capacity by camera3
export const emitCapacityByCamera3 = async (req, res) => {
  try {
    const capacityTranQueue = req.body.quantityTran;
    const capacityAtmQueue = req.body.quantityAtm;
    app.emit('emitSocket', {message: `Send Capacity by Camera 3 ${req.body.idBank}`, data: { capacityTranQueue: capacityTranQueue, capacityAtmQueue: capacityAtmQueue }});
    res.json(createResponse(1, "Registro exitoso", { capacityTranQueue: capacityTranQueue, capacityAtmQueue: capacityAtmQueue }));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};