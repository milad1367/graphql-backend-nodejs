import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Post } from '../graphql';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolvers {
  constructor(private readonly postsService: PostsService) {}

  @Query()
  async getPosts() {
    return await this.postsService.findAll();
  }

  @Query('post')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Post> {
    return await this.postsService.findOneById(id);
  }

}
