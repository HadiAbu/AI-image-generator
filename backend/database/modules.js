import mongoose from "mongoose";

const Post = mongoose.Schema({
  name: { String, required: true },
  prompt: { String, required: true },
  imgSrc: { String, required: true },
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
