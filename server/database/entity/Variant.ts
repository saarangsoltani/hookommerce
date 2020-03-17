import Product from './Product';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne
} from 'typeorm';

export interface IVariant {
  id: number;
  product_id: number;
  type: string;
  price: number;
  stock_level: number;
  isbn: string;
}


@Entity()
export default class Variant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Product, product => product.variants)
  product: Product

  @Column()
  type: string;

  @Column()
  price: number

  @Column()
  stock_level: number;

  @Column()
  isbn: string;
}
