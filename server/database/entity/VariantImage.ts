import Product from './Product';
import Variant from './Variant';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne
} from 'typeorm';

export interface IVariantImage {
  id: number;
  variantId: number;
  productId: number;
  url: string;
}


@Entity()
export default class VariantImage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Product, product => product.images)
  product: Product

  @ManyToOne(type => Variant, variant => variant.images)
  variant: Variant

  @Column()
  url: string;

}
