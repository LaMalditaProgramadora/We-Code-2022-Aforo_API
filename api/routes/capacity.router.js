import express from "express";

import { CapacityController } from "../controllers/_index.js";

const { listAll, listById, create, update, remove, emitCapacityByCamera1, emitCapacityByCamera2, emitCapacityByCamera3, emitCapacityByTicket, emitCapacityBySensor } =
  CapacityController;

const router = express.Router();

const capacityRouter = {
  LIST_ALL: "/capacity/listAll",
  LIST_BY_ID: "/capacity/listById",
  CREATE: "/capacity/create",
  UPDATE: "/capacity/update",
  REMOVE: "/capacity/remove",
  EMIT_CAMERA_1: "/capacity/camera/1",
  EMIT_CAMERA_2: "/capacity/camera/2",
  EMIT_CAMERA_3: "/capacity/camera/3",
  EMIT_TICKET: "/capacity/ticket",
  EMIT_SENSOR: "/capacity/sensor",
};

router.get(capacityRouter.LIST_ALL, listAll);
router.get(capacityRouter.LIST_BY_ID, listById);
router.post(capacityRouter.CREATE, create);
router.put(capacityRouter.UPDATE, update);
router.delete(capacityRouter.REMOVE, remove);
router.post(capacityRouter.EMIT_CAMERA_1, emitCapacityByCamera1);
router.post(capacityRouter.EMIT_CAMERA_2, emitCapacityByCamera2);
router.post(capacityRouter.EMIT_CAMERA_3, emitCapacityByCamera3);
router.post(capacityRouter.EMIT_TICKET, emitCapacityByTicket);
router.post(capacityRouter.EMIT_SENSOR, emitCapacityBySensor);

export default router;