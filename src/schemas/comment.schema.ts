import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    content: String,
    avatar: String,
});
