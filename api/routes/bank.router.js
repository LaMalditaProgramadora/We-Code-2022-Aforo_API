import express from "express";

import { BankController } from "../controllers/_index.js";

const { listAll, listById, create, update, remove } =
  BankController;

const router = express.Router();

const bankRouter = {
  LIST_ALL: "/bank/listAll",
  LIST_BY_ID: "/bank/listById",
  CREATE: "/bank/create",
  UPDATE: "/bank/update",
  REMOVE: "/bank/remove",
};

router.get(bankRouter.LIST_ALL, listAll);
router.get(bankRouter.LIST_BY_ID, listById);
router.post(bankRouter.CREATE, create);
router.put(bankRouter.UPDATE, update);
router.delete(bankRouter.REMOVE, remove);

export default router;
