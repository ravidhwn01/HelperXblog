import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogType } from 'src/types/common.type';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get('/blogs')
  getAllBlogs() {
    return this.blogService.getAllBlog();
  }
  @Post('/createblog')
  createBlog(@Body() blog: BlogType): BlogType {
    return this.blogService.addBlog(blog);
  }
}
