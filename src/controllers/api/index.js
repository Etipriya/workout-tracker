const Workout = require("../../models/workout");

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

//Add exercise
const addExercise = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const workout = await Workout.findByIdAndUpdate(id, {
      $push: { exercises: body },
    });
    res.json(workout);
  } catch (error) {
    res.json(error);
  }
};

//Create Workout
const createWorkout = async (req, res) => {
  const { body } = req;
  try {
    const newWorkout = await Workout.create(body);
    res.json(newWorkout);
  } catch (error) {
    res.json(error);
  }
};

//Add getWorkoutsInRange
const getWorkoutsInRange = async (req, res) => {
  try {
    const workoutsInRange = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7);
    res.json(workoutsInRange);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getWorkouts,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
};
