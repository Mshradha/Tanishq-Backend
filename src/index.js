const express = require("express");
const { register, login, newtoken } = require("./controllers/auth.controller");

const userController = require("./controllers/user.controller");

const mdiamondController = require("./controllers/mdiamond.controller")

const menproductController = require("./controllers/menproduct.controller")

const mgoldController = require("./controllers/mgold.controller")

const mplatinumController = require("./controllers/mplatinum.controller")

const wdiamondController = require("./controllers/wdiamond.controller")

const wgoldController = require("./controllers/wgold.controller")

const womenproductController = require("./controllers/womenproduct.controller")

const wplatinumController = require("./controllers/wplatinum.controller")

const app = express();

app.use(express.json());

const router = express.Router()

app.use(router)

router.use("/register", register);

router.use("/login", login);

router.use("/user", userController);

router.use("/user", userController);

router.use("/mdiamond",mdiamondController)

router.use("/menproduct",menproductController)

router.use("/mgold",mgoldController)

router.use("/mplatinum",mplatinumController)

router.use("/wdiamond",wdiamondController)

router.use("/wgold",wgoldController)

router.use("/womenproduct",womenproductController)

router.use("/wplatinum",wplatinumController)

const connect = require("./configs/db");


app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening to port 5000");
  } catch (error) {
    console.log(error);
  }
});
