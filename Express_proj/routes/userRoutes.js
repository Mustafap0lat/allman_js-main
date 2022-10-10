import express from "express";
import { users, removeById, updateUserById } from "../data/users.js"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const route = express.Router();

// GET all users
route.get("/", async (req, res) => {

    const users = await prisma.users.findMany({
        select: {
            id: true,
            fname: true,
            lname: true,
            role:true
        },
    })
    // .then(users => res.json(users))


    res.json(users)
})

// GET by id
route.get("/:id", async (req, res) => {

    const user = await prisma.users.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    res.json(user)

})

// POST new user
route.post("/", async (req, res) => {

var isRoles  = ["MASTER" , "IMPOSTER", "FOLLOWER"]
console.log("ROW 42 " +  isRoles[Math.random(isRoles.length)])
    
const user = await prisma.users.create({
        data: {
            fname: req.body.fname,
            lname: req.body.lname,
            role: isRoles[Math.floor(Math.random() * isRoles.length)]
        }
        

    }).then(e => {
        console.log("ROW 53 " + e)
       
       let resData = {
            Name: e.fname + " " + e.lname
        }
        res.json(resData)
    })
    res.json(user)
    
    //HÄMTA ALLA USERS OCH KOLLA OM DET FINNS NÅGON MASTER, ISÅFALL.. KÖR MATH RANDOM TILLS INTE MASTER 


})

// DELETE
route.delete("/:id", async (req, res) => {

    await prisma.users.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })

    res.sendStatus(204)
})

// Patch
route.patch("/:id", async (req, res) => {
    const user = await prisma.users.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            fname: req.body.fname,
            lname: req.body.lname
        }
    })

    res.json(user)
})

export default route;