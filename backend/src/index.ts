import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
import { ContentModel, LinkModel, UserModel } from "./db";
import { userMiddleware } from "./middleware";
import { random } from "./utils";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;


const PORT = process.env.PORT;

const app = express()
app.use(cors())
app.use(express.json());


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

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const title = req.body.title;
    const type = req.body.type;
    await ContentModel.create({
        link,
        title,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: [],
    })

    res.json({
        message: "Content added"
    })
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json (
        content
    )
})


app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    await ContentModel.deleteMany({
        contentId: contentId,
        //@ts-ignore
        userId: req.userId
    })
    res.json ({
        message: "content deleted"
    })
})


app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        })
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return
        }
        const hash= random(10);
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        })
        res.json({
            hash
        })
        

    } else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        })
        res.json({
        message: "Link Removed"
    })
    }
    
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink

    const link = await LinkModel.findOne({
        hash: hash,
    })
    if (!link) {
        res.status(411).json({
            message: "Sorry, icorrect input"
        })
        return
    }

    const content = await ContentModel.find({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    res.json({
        username: user?.username,
        content: content
    })
})

app.post("/api/v1/content/delete", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    console.log("Delete request:", { contentId, userId: req.userId });
    
    const result = await ContentModel.deleteOne({
        _id: contentId,
        //@ts-ignore
        userId: req.userId
    })
    
    console.log("Delete result:", result);
    res.json({
        message: "content deleted",
        deletedCount: result.deletedCount
    })
})



export default app;

app.listen(parseInt(PORT || "5000"), () => {
  console.log(`🚀 Server running on http://localhost:${PORT || "5000"}`);
});
