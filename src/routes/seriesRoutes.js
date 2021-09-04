const controllers = require("../controllers/seriesControllers")

const express = require("express")
const router = express.Router()

router.get("/", controllers.home)
router.get("/todos", controllers.getAll)
router.get("/:id", controllers.getById)
router.get("/:titulo", controllers.getByTitle)

module.exports = router