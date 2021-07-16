const { Router } = require("express");

const {
  renderExercises,
  renderStats,
} = require("../../controllers/html/index");
const router = Router();

router.get("/exercise", renderExercises);

router.get("/stats", renderStats);

module.exports = router;
