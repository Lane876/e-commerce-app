import express from "express";
import User from "../models/userModel";
import { getToken } from "../util";

const router = express.Router();

router.post("/signin", (req, res) => {
  const signUser = User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (signUser) {
    res.send({
      _id: signUser.id,
      name: signUser.name,
      email: signUser.email,
      isAdmin: signUser.isAdmin,
      token: getToken(signUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid email or password" });
  }
});

router.get("/createadmin/", async (req, res) => {
  try {
    const user = new User({
      name: "Milan",
      email: "milenkovicmilan10@gmail.com",
      password: "111",
      isAdimn: true,
    });

    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;

// 3:46
