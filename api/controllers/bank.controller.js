import { Bank } from "../models/_index.js";
import { createResponse } from "../utils/response.js";

export const listById = async (req, res) => {
  try {
    const { _id: _id } = req.query;
    let bank = await Bank.findById(_id);
    res.json(createResponse(1, "Banco encontrado", bank));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const listAll = async (req, res) => {
  try {
    let banks = await Bank.find();
    res.json(createResponse(1, "Bancos encontrados", banks));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const create = async (req, res) => {
  try {
    const bank = new Bank(req.body);
    const bankSave = await bank.save();
    res.json(createResponse(1, "Registro exitoso", bankSave));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const update = async (req, res) => {
  try {
    let bank = await Bank.findById(req.body._id);
    bank.description = req.body.description;
    const bankSave = await bank.save();
    res.json(createResponse(1, "Actualización exitosa", bankSave));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const remove = async (req, res) => {
  try {
    const { _id: _id } = req.query;
    const bank = await Bank.findById(_id);
    const bankDelete = await Bank.deleteOne({ _id: _id });
    res.json(createResponse(1, "Eliminación exitosa", null));
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};
