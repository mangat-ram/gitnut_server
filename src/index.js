import { dbConnect } from "./db/dbConnect.js";
import { app } from "./app.js";
import dotenv from "dotenv"

dotenv.config({
  path:"./.env"
})

dbConnect()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("App is Listening....");
  })
})
.catch((err) => console.log("In Index Error:: ",err))