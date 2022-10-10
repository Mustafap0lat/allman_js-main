import express from 'express';
import 'dotenv/config';
import userRoute from './routes/userRoutes.js'

// Skapar express-server
const server = express();
const PORT = process.env.PORT || 5000;

// Parsar data som JSON
server.use(express.json())

server.use("/api/user", userRoute)

// Mappar GET-anrop till viss address
server.get("/", ((req, res) => res.json({ message: "Hello World!" })))

// Lyssna på angiven port
server.listen(PORT, () => console.log(`Server started on ${PORT}`))