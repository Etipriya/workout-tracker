const Workout = require("../../models/Workout");

//Added get workouts function
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    res.json(workouts);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getWorkouts,
  //addExercise,
  // createWorkout,
  // getWorkoutsInRange,
};
