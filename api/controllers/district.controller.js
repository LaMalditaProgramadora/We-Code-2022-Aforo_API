import { District } from "../models/_index.js";
import { createResponse } from "../utils/response.js";

export const listById = async (req, res) => {
  try {
    const { _id: _id } = req.query;
    let district = await District.findById(_id);
    res.json(createResponse(1, "Distrito encontrado", district));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const listAll = async (req, res) => {
  try {
    let districts = await District.find();
    res.json(createResponse(1, "Distritos encontrados", districts));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const create = async (req, res) => {
  try {
    const district = new District(req.body);
    const districtSave = await district.save();
    res.json(createResponse(1, "Registro exitoso", districtSave));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const update = async (req, res) => {
  try {
    let district = await District.findById(req.body._id);
    district.description = req.body.description;
    const districtSave = await district.save();
    res.json(createResponse(1, "Actualización exitosa", districtSave));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const remove = async (req, res) => {
  try {
    const { _id: _id } = req.query;
    const district = await District.findById(_id);
    const districtDelete = await District.deleteOne({ _id: _id });
    res.json(createResponse(1, "Eliminación exitosa", null));
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};
