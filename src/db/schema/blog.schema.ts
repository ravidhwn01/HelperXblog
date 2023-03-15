import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class BlogSchema extends Model {
  @Column
  title: string;
  @Column
  blogbody: string;
}
