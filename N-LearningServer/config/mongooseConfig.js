const mongoose = require("mongoose");
require("dotenv").config()

const mongooseConnect = async () => {
  try {
    await main().then(() => console.log("database connected"))
    main().catch((err) => console.log(err));
    async function main() {
      await mongoose.connect(process.env.MONGO_URL);
    }
  } catch (err) {
      console.log("unable to connect mongoDb ")
  }

}

module.exports = { mongooseConnect }