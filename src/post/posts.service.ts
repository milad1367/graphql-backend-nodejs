import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from '../graphql';
@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}
  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async findOneById(id: string): Promise <Post> {
    const post = await this.postModel
    .findById(mongoose.Types.ObjectId(id))
    .exec();
    return post;
  }
}
