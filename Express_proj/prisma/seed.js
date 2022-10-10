import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const seed = async () => {

    await prisma.users.deleteMany();
    await prisma.todos.deleteMany();

    await prisma.users.create({
        data: {
            fname: "Alice",
            lname: "Alicedotter",
        }
    })

    await prisma.users.create({
        data: {
            fname: "Gunnar",
            lname: "Gunnarsson"
        }
    })

    await prisma.todos.create({
        data: {
            id: 1,
            title: "Alice första todo",
            user_id: 1
        }
    })


}

seed();

export default seed;