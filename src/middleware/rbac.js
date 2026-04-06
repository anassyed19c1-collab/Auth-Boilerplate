import sendResponse from "../utils/sendResponse.js";

const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return sendResponse(
        res,
        403,
        `User Not Authorized — Only ${allowedRoles.join(", ")} can access this resource`
      );
    }
    next();
  };
};

export default authorizeRoles;