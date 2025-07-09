import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
import { UserModel } from "./db";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;


const PORT = process.env.PORT;

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        message: "get route"
    })
})

app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    try {
        await UserModel.create({
        username: username,
        password: password
    })

    res.json({
        message: "User signed up"
    })
    } catch(e) {
        res.status(411).json({
            message: "user already exists"
        })
    }
})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username: username,
        password: password,
    })
    if (existingUser) {
    const token = jwt.sign(
      { id: existingUser._id },
      JWT_SECRET
    );
    res.json({
        token
    }); 
} else {
    res.status(403).json({
        message: "Invalid credentials"
    })
} 
})

app.post("api/v1/content", (req, res) => {
    
})

app.get("api/v1/content", (req, res) => {
    
})


app.delete("api/v1/content", (req, res) => {
    
})


app.post("api/v1/brain/share", (req, res) => {
    
})

app.post("api/v1/brain/:shareLink", (req, res) => {
    
})


export default app;

app.listen(parseInt(PORT || "5000"), () => {
  console.log(`🚀 Server running on http://localhost:${PORT || "5000"}`);
});
