import express from "express";

import { CapacityController } from "../controllers/_index.js";

const { listAll, listById, create, update, remove, emitInput } =
  CapacityController;

const router = express.Router();

const capacityRouter = {
  LIST_ALL: "/capacity/listAll",
  LIST_BY_ID: "/capacity/listById",
  CREATE: "/capacity/create",
  UPDATE: "/capacity/update",
  REMOVE: "/capacity/remove",
  EMIT_INPUT: "/capacity/input"
};

router.get(capacityRouter.LIST_ALL, listAll);
router.get(capacityRouter.LIST_BY_ID, listById);
router.post(capacityRouter.CREATE, create);
router.put(capacityRouter.UPDATE, update);
router.delete(capacityRouter.REMOVE, remove);
router.post(capacityRouter.EMIT_INPUT, emitInput);

export default router;