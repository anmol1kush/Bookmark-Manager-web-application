const express = require("express");
const router = express.Router();

const controller = require("../controllers/bookmark.controller");
const validate = require("../middlewares/validate.middleware");

router.get("/", controller.getAll);
router.post("/", validate, controller.create);
router.delete("/:id", controller.remove);
router.put("/:id", controller.update);


module.exports = router;
