import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    tweetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    like: {
        type: Array,
        default: []
    },
    userDetails: {
        type: Array,
        default: []
    }
}, { timestamps: true });

export const Comment = mongoose.model("Comment", commentSchema);
