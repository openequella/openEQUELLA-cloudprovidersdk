import express from "express";
import Bundler from "parcel-bundler";
import path from "path";
import { CloudControls } from "../../controls";

const app = express();
const port = 5000 || process.env.PORT;

const controls: CloudControls = {
  omdb: {
    name: "OMDB Lookup",
    configuration: []
  }
};

app.get("/controls", (req, res) => res.send(controls));

const bundler = new Bundler(path.join(__dirname, "../src/site/index.html"));
app.use(bundler.middleware());

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
