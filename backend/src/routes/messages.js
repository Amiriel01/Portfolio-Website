import {Router} from "express";
const router = Router();
import { message_list, message_details, message_create, message_edit, message_delete } from "../contollers/contactController.js";

//GET all messages
router.get("/messageList", message_list());

//GET message details
router.get("/messageDetails/:id", message_details());

//POST new ,essage
router.post("/messageDetails", message_create());

//PUT edit message
router.put("/messageDetails/:id", message_edit());

//DELETE message
router.delete("/messageDetails/:id", message_delete());

export default router;