import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 5000;
server.listen(5000, () => console.log("Server running in PORT: " + PORT));
