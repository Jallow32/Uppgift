import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
    console.log(users);

res.send(users);

});

router.post("/" , (req, res) => {
   const user = req.body;

   users.push({... user, id: uuidv4()});

    res.send(`user with name ${user.firstName} has been added`);
});

router.get("/:id" , (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);
    
     res.send(foundUser);
});

router.delete("/:id" , (req, res) => {
    const { id } = req.params;

    
    users = users.filter((user) => user.id !== id);

    res.send(`user with this id ${id} has been deleted`);
});


router.patch("/:id" , (req, res) => {
    const { id } = req.params;
const {firstName, lastName, age } = req.body;
    
const user = users.find((user) => user.id == id);

if (firstName) user.firstName = firstName;
if (lastName) user.lastName = lastName;
if (age)user.age = age;

res.send(`The user with this id ${id} has been updated`);


});

export default router;