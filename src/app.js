import express from "express";
import cors from "cors";

const app = express();

app.use(cors({origin:process.CORS_ORIGIN,credentials:true}));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));



export { app };