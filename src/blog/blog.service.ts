import { Injectable } from '@nestjs/common';
import { BlogType } from 'src/types/common.type';

@Injectable()
export class BlogService {
  public blogs: BlogType[] = [];

  addBlog(blog: BlogType): BlogType {
    this.blogs.push(blog);
    return blog;
  }

  getAllBlog(): BlogType[] {
    return this.blogs;
  }
}
