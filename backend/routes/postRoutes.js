import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../models/postModel.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

// GET all posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
});

// Create a new post
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, img } = req.body;
    const imgUrl = await cloudinary.uploader.upload(img);

    const newPost = await Post.create({
      name,
      prompt,
      imgSrc: imgUrl.url,
    });
    res.status(201).json({ success: true, data: newPost });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
});

export default router;
