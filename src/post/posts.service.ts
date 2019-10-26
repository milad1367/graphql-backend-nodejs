import { Injectable } from '@nestjs/common';
import { Post } from '../graphql';
import data from '../data';
@Injectable()
export class PostsService {
  private readonly posts: Post[] = data;
  findAll(): Post[] {
    return this.posts;
  }

  findOneById(id: number): Post {
    return this.posts.find(post => post.id === id);
  }
}
