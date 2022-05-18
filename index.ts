import express from "express";
import cors from "cors";
const UserRoute = require("./src/Route/UserRoute");

require("dotenv").config();
const port = process.env.PORT || 5001;

// file call
const app: express.Application = express();

// middle wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.use("/user", UserRoute);

// cors error resolve
app.all("*", function (req: express.Request, res: express.Response, next) {
  res.header("Access-Control-Allow-Headers : Origin, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// first route
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("This is Node Test Server");
});

// Undefined Route Implement
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ error: true, message: "Not Found this route" });
});

//   test
app.listen(port, () => {
  console.log("successfully run by port", port);
});
