const signUp_mdl = require("../../models/sign_up");

exports.sign_up = async (req, res, next) => {
  try {
    const reqParams = req["body"] || {};
    const response = await signUp_mdl.sign_up(reqParams);
    const result = { status: true, msg: "working", data: response };
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.mail_verfication = async (req, res, next) => {
  try {
    const reqParams = req["body"] || {};
    const response = await sign_up_mdl.mail_verfication(reqParams);
    const result = { status: true, data: response };
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
