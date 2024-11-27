import { register_Model } from "../../models/users/register_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const postloginData = async (req, res) => {

  const user = await register_Model.find({ email: req.body.email });
  console.log("user >>>>", user);

  if (user.length > 0) {
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if (result) {
        const token = jwt.sign(
          { user: user[0]._id, role: user[0].role },
          process.env.JWT_SECRET || "#secret",
          { expiresIn: "1h" }
        );
        res.json({
          status: 200,
          message: "Login Successfull",
          token: token,
        });
      } else {
        res.json({
          status: 400,
          message: "Invalid Password",
        });
      }
    });
  } else {
    res.json({
      status: 400,
      message: "Invalid Email or Password",
    });
  }
};

export { postloginData };
