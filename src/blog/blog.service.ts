import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { BlogSchema } from 'src/db/schema/blog.schema';
import { BlogType } from 'src/types/common.type';

@Injectable()
export class BlogService {
  private repository: Repository<BlogSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(BlogSchema);
  }

  // addBlog(blog: BlogType): BlogType {}
  create(createTestDto: BlogType) {
    return this.repository.create(createTestDto as any);
  }
  getAllBlog(): Promise<BlogType[]> {
    return this.repository.findAll();
  }
}
