import { Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get('/blogs')
  getAllBlogs() {
    return this.blogService.getAllBlog();
  }
  @Post('/createblog')
  createBlog() {
    return this.blogService.createBlog();
  }
}
