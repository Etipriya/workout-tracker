const path = require("path");

const renderExercises = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
};

const renderStats = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
};

module.exports = {
  renderExercises,
  renderStats,
};
