const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://petrovblaze48_db_user:blagojpetrov123@cluster0.rq1pibq.mongodb.net/"
  )
  .then(() => console.log("Connected Mongo DB"))
  .catch((e) => console.log(e));
