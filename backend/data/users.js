import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "Jorge Perez",
    email: "jorge@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    name: "Juan Fernandez",
    email: "juan@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

export default users;
