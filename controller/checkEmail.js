const UserModel = require("../models/UserModel");

async function checkEmail(request, response) {
  try {
    const { email } = request.body;
    if (email) {
      const checkEmail = await UserModel.findOne({ email }).select("-password");

      if (!checkEmail) {
        return response.status(400).json({
          message: "User not exist.",
          error: true,
        });
      }

      return response.status(200).json({
        message: "E-mail verified...",
        success: true,
        data: checkEmail,
      });
    } else {
      response.status(500).json({
        message: "Please enter your email",
        error: true,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = checkEmail;
