import express, { Router } from "express";
import axios from "axios";

// Express App
const app = express()
// Router
const  router = express.Router()
// port
const port = +process.env.port || 4000
// json data
const jsonData = 'https://veroniquex1.github.io/vueJSONData/data/'
// Middleware
app.use(
    router
)