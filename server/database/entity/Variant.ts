import Product from './Product';
import VariantImage from './VariantImage';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';

export interface IVariant {
  id: number;
  productId: number;
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

  @OneToMany(type => VariantImage, variantImage => variantImage.variant)
  images: VariantImage[]

  @Column()
  type: string;

  @Column()
  price: number

  @Column()
  stock_level: number;

  @Column()
  isbn: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
