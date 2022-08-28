import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from 'http';
import { Server } from "socket.io";
import axios from "axios";
import {
  DistrictRouter,
  BankRouter,
  CapacityRouter,
} from "./api/routes/_index.js";
import { CapacityController } from "./api/controllers/_index.js";

dotenv.config();

// Connect to db
await mongoose.connect(process.env.MONGODB_AFORO_URL);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

// Express
const app = express();

// Middleware
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());

// Socket.io
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.REACT_APP_AFORO_URL,
    methods: ["GET", "POST"]
  }
});

// Routes
app.get("/", (req, res) => {
  res.send("AFORO API");
});

app.use("/", DistrictRouter);
app.use("/", BankRouter);
app.use("/", CapacityRouter);

// Launch server
server.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("Se inició el servidor");
});

// Proceso de registro histórico

const urlInput = process.env.REACT_APP_AFORO_URL;

const saveCapacity = () => {
  try {
    axios.get(`${urlInput}/capacity`).then(data => {
      console.log(data.data);
      if (data.data) {
        data.data.forEach(element => {
          const save = CapacityController.createHist(element).then((result) => {
            console.log("OK");
          });
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
}

// 1 min
setInterval(saveCapacity, 1000 * 60 * 2);


io.on('connection', function (socket) {
  console.log("Conexión exitosa");

  app.on('emitSocket', ({ message, data }) => {
    console.log('Evento: '.concat(message));
    socket.emit(message, data);
  });

});

export default app;