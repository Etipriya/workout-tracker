const DB_NAME = process.env.DB_NAME || "workout-tracker";

const DB_URL = process.env.MONGODB_URL || `mongodb://localhost/${DB_NAME}`;

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

module.exports = {
  DB_URL,
  MONGOOSE_OPTIONS,
};
