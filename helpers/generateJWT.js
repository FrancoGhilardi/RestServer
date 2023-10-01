import jwt from "jsonwebtoken";

const generateJWT = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    const secretPrivateKey = process.env.SECRETPRIVATEKEY;

    jwt.sign(payload, secretPrivateKey, { expiresIn: "4h" }, (err, token) => {
      if (err) {
        console.log(err);
        reject("Token could not be generated!");
      } else {
        resolve(token);
      }
    });
  });
};

export { generateJWT };
