import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  createBlog() {
    return `creating blog`;
  }

  getAllBlog() {
    return `getting all blog`;
  }
}
