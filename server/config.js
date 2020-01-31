module.exports = {
  PORT: 8000,
  DB: `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@kodilla-iuapr.mongodb.net/test?retryWrites=true&w=majority`
};
