import { principal_Model } from "../models/principal_model.js";
import bcrypt from "bcrypt"

const getPrincipalData = async (req, res) => {
  const principal = await principal_Model.find({});

  console.log("principal >>>", principal);

  res.json({
    status: 200,
    message: "Data Found all principal",
    data: principal,
  });
};

const postPrincipalData = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hassPassword = await bcrypt.hash(password, 10);

    const principal = new principal_Model({
      name,
      email,
      password : hassPassword,
    });

    const principalAdd = await principal.save();

    res.json({
      status: 201,
      message: "Data Found all principal",
      data: principalAdd,
    });
  } catch (error) {
    res.json({
      status: 404,
      error: "No Data Found",
    });
  }
};

export { getPrincipalData, postPrincipalData };