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

// Emit input
export const emitInput = async (req, res) => {
  try {
    const capacities = req.body;
    capacities.forEach((capacity) => {
      app.emit('emitSocket', {message: `input ${capacity.idBank}`, data: capacity});
    });
    
    res.json(createResponse(1, "Registro exitoso", null));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};
