import * as mongoose from 'mongoose';
import { CommentSchema } from './comment.schema';
export const PostSchema = new mongoose.Schema({
    name: String,
    comments: [CommentSchema],
    image: String,
    content: String,
    avatar: String,
});
