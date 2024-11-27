import { register_Model } from "../models/users/register_model.js";
import bcrypt from "bcrypt";

const getregisterData = async (req, res) => {
  try {
    const registerData = await register_Model.find({});
    res.json({
      status: 200,
      message: "Data Found all register",
      data: registerData,
    });
  } catch (error) {
    res.json({
      status: 404,
      error: "No Data Found",
    });
  }
};

const postregisterData = async (req, res) => {
    try {
        const { userName, email, password, role } = req.body;
 
        const hassPassword = await bcrypt.hash(password, 10);

        const userAdd = new register_Model({
          userName,
          email,
          password: hassPassword,
          role,
        });

        const registerAdd = await userAdd.save();
        console.log("registerAdd", registerAdd); 
        
        res.json({
          status: 200,
          message: "successfully register",
          data: registerAdd,
        });
    } 
    catch (error) {
      console.log("not successfully register", error);
      
      res.json({
          status: 404,
          error: "No Data Found"
      });
    }
};

export { getregisterData, postregisterData };
