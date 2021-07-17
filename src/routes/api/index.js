const { Router } = require("express");

const {
  getWorkouts,
  // addExercise,
  // createWorkout,
  // getWorkoutsInRange,
} = require("../../controllers/api/index");
const router = Router();

router.get("/api/workouts", getWorkouts);

// router.put("/api/workouts/:id", addExercise);

// router.post("/api/workouts", createWorkout);

// router.get("/api/workouts/range", getWorkoutsInRange);

module.exports = router;
