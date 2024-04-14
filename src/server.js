import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import dotenv from "dotenv";

dotenv.config();

let app = express();


//configure app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("listening on portp: " + port);
});