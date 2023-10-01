import { request, response } from "express";

const isAdminRole = (req = request, res = response, next) => {
  if (!req.usuario)
    return res.status(500).json({
      Message:
        "You want to verify the role without validating the token first!",
    });

  const { rol, name } = req.usuario;

  if (rol !== "ADMIN_ROLE")
    return res.status(401).json({
      Message: `${name} is not a valid admin role!`,
    });

  next();
};

const containRole = (...roles) => {
  return (req = request, res = response, next) => {
    if (!req.usuario)
      return res.status(500).json({
        Message:
          "You want to verify the role without validating the token first!",
      });

    if (!roles.includes(req.usuario.rol))
      return res.status(401).json({
        Message: `The service requires one of these roles ${roles}`,
      });

    next();
  };
};

export { isAdminRole, containRole };
