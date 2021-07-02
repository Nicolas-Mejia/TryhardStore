import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@asd.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jorge Perez",
    email: "jorge@asd.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Juan Fernandez",
    email: "juan@asd.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
