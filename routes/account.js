import express from "express";
const router = express.Router();
import axios from "axios";

//GET
// router
//   .get("/sayWelcome", async (req, res) => {
//     const pepole = await axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((result) => {
//         const users = result.data;
//         let new_arr = [];

//         users.forEach((y) => {
//           const person = {
//             person_name: y.name,
//             person_email: y.email,
//             person_company: y.company,
//             person_city: y.city,
//           };
//           new_arr.push(person);
//         });

//         //     console.log("Number of users: " + users.length);
//         //   users.forEach((x) => {
//         //     console.log(x.name + "Hello" + x.address.name);
//         //   });

//         //FILTER
//         // const arr = users.filter((x) => parseInt(x.id) > 5);
//       });

//     //FIND
//     //   const obj = users.find((x) => x.email !== "")

//     return res.status(200).json({ data: new_arr });
//   })
//   .catch((error) => {
//     return res.status(200).json({ message: error.message });
//   });

//POST
// router.post("/sayMyName", (req, res) => {
//   const { username, password } = req.body;
//   return res
//     .status(200)
//     .json({ massage: `Hello ${username} Your password is ${password}` });
// });

export default router;
