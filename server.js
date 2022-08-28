import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from 'http';
import { Server } from "socket.io";

import {
  DistrictRouter,
  BankRouter,
  CapacityRouter,
} from "./api/routes/_index.js";

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

/*
const io = new Server(server, {
  cors: {
    origin: process.env.REACT_APP_AFORO_URL,
    methods: ["GET", "POST"]
  }
});*/

// Routes
app.get("/", (req, res) => {
  res.send("AFORO API");
});

app.use("/", DistrictRouter);
app.use("/", BankRouter);
app.use("/", CapacityRouter);

// Launch server
server.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("Se inició el servidor");
});

/*
// Socket.io
io.on("connection", function (socket) {
  console.log("New connection");
  socket.on("Receive Data", function () {
    console.log("Enviar data");
    io.emit("Send Data");
  });
});*/
