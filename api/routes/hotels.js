import { Router } from "express";
import express from "express";

import {
  cretehotel,
  getallhotel,
  gethotel,
  deletehotel,
  updatehotel,
} from "../controllers/hotel.js";
import { verifyadmin } from "../utils/verifytokens.js";

const router = Router();
//crete hotel
router.post("/", verifyadmin, cretehotel);
//get all hotel
router.get("/", getallhotel);

//get perticular hotel
router.get("/:id", gethotel);
//update
router.put("/:id", verifyadmin, updatehotel);

//delete
router.delete("/:id", verifyadmin, deletehotel);
export default router;
