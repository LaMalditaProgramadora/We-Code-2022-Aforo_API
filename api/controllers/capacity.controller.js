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

//Save capacity by ticket
export const saveCapacityByTicket = async (req, res) => {
  try {
    const capacityByNormalTransacction = req.body.quantity;
    const capacityByNormalPreference = req.body.quantityPreference;
    //to-do
    console.log("Enviar data");
    //io.emit("Send Capacity by Ticket " + req.body.idBank, { capacityByNormalTransacction, capacityByNormalPreference }) ;
    res.json(createResponse(1, "Registro exitoso", capacityByTransacction));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};
