import { Comment } from "../models/commentSchema.js";
import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

// Create a comment
export const createComment = async (req, res) => {
    try {
        const { tweetId, description, userId } = req.body;
        if (!description || !tweetId || !userId) {
            return res.status(400).json({
                message: "Fields are required.",
                success: false,
            });
        }

        const user = await User.findById(userId).select("-password");
        const tweet = await Tweet.findById(tweetId);

        if (!tweet) {
            return res.status(404).json({
                message: "Tweet not found.",
                success: false,
            });
        }

        const newComment = await Comment.create({
            description,
            userId,
            tweetId,
            userDetails: user,
        });

        return res.status(201).json({
            message: "Comment created successfully.",
            success: true,
            comment: newComment,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred.",
            success: false,
        });
    }
};

// Delete a comment
export const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({
                message: "Comment not found.",
                success: false,
            });
        }

        await Comment.findByIdAndDelete(commentId);

        return res.status(200).json({
            message: "Comment deleted successfully.",
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred.",
            success: false,
        });
    }
};

// Get comments for a specific tweet
export const getCommentsByTweet = async (req, res) => {
    try {
        const { tweetId } = req.params;

        const comments = await Comment.find({ tweetId }).populate('userId', '-password');

        return res.status(200).json({
            success: true,
            comments,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred.",
            success: false,
        });
    }
};

// Get all comments by a specific user
export const getCommentsByUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const comments = await Comment.find({ userId }).populate('tweetId');

        return res.status(200).json({
            success: true,
            comments,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred.",
            success: false,
        });
    }
};
