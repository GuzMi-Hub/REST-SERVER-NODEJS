const validarCampos = require("./validar-campos");
const validarJWT = require("./validar-jwt");
const validarRol = require("./validar-roles");

module.exports = {
  ...validarCampos,
  ...validarJWT,
  ...validarRol,
};
