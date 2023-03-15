import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogSchema } from './schema/blog.schema';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      password: 'postgres',
      username: 'postgres',
      port: 5000,
      models: [BlogSchema],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
