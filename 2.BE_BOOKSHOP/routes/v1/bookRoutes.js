import { Router } from "express";
import bookController from "../../controllers/bookController.js";

const router = new Router();

router
  .get("/", bookController.listBook)
  .post("/", bookController.createBook)
  .put("/:id", bookController.updateBook)
  .delete("/:id", bookController.deleteBook);

export default router;
