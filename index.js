const express = require("express");

var cors = require("cors");

const { register, login, newtoken } = require("./controllers/auth.controller");

const cartController = require("./controllers/cart.controller")

const userController = require("./controllers/user.controller");

const productController = require("./controllers/product.controller");

const app = express();

app.use(cors());

app.use(express.json());

const router = express.Router();

app.use(router);

router.use("/register", register);

router.use("/login", login);

router.use("/user", userController);

router.use("/user", userController);

router.use("/product", productController);

router.use("/cart",cartController)

const connect = require("./configs/db");

const port =  process.env.PORT;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening to port ${port}`);
  } catch (error) {
    console.log(error);
    console.log("hello")
  }
});

// app.listen(5000, async () => {
//   try {
//     await connect();
//     console.log("listening to port 5000");
//   } catch (error) {
//     console.log(error);
//   }
// });
