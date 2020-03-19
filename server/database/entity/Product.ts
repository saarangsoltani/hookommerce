import Variant from './Variant';
import VariantImage from './VariantImage';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany
} from 'typeorm';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

@Entity()
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @OneToMany(type => Variant, variant => variant.product)
  variants: Variant[]

  @OneToMany(type => VariantImage, image => image.product)
  images: VariantImage[]

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
