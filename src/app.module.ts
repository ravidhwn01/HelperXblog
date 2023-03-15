import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './modules/blogs/blogs.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [BlogsModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
