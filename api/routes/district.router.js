import express from "express";

import { DistrictController } from "../controllers/_index.js";

const { listAll, listById, create, update, remove } =
  DistrictController;

const router = express.Router();

const districtRouter = {
  LIST_ALL: "/district/listAll",
  LIST_BY_ID: "/district/listById",
  CREATE: "/district/create",
  UPDATE: "/district/update",
  REMOVE: "/district/remove",
};

router.get(districtRouter.LIST_ALL, listAll);
router.get(districtRouter.LIST_BY_ID, listById);
router.post(districtRouter.CREATE, create);
router.put(districtRouter.UPDATE, update);
router.delete(districtRouter.REMOVE, remove);

export default router;
