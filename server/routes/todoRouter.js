const router = require("express").Router();
const { add, get, deleteItem } = require("../controllers/todoController");

router.post("/add", add);
router.get("/", get);
router.delete("/delete/:key", deleteItem);

module.exports = router;
