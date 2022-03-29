const express = require("express");
const { register, login, newtoken } = require("./controllers/auth.controller");

const userController = require("./controllers/user.controller");

const productController = require("./controllers/product.controller")


const app = express();

app.use(express.json());

const router = express.Router()

app.use(router)

router.use("/register", register);

router.use("/login", login);

router.use("/user", userController);

router.use("/user", userController);

router.use("/product",productController)


const connect = require("./configs/db");


app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening to port 5000");
  } catch (error) {
    console.log(error);
  }
});
