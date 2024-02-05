const { verify } = require("jsonwebtoken");
const validateToken = (req, res, next) => {
  const  accessToken  = req.header("accessToken");
  try {
    if (!accessToken) {
      return res.json({});
    } else {
      const varifytoken = verify(accessToken, "UltraEgo");
      if (varifytoken) {
        req.user = varifytoken;

        return next();
      } else {
        return res.json({ err: "Invalid user!" });
      }
    }
  } catch (error) {
    return res.json({ err: error.message });
  }
};
module.exports = {
  validateToken,
};
