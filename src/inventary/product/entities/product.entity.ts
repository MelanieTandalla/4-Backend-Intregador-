import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Input } from 'src/inventary/input/entities';
import { Category } from '../../caterogy/entities/category.entity';
import { Output } from '../../output/entities/output.entity';
import { InputDetails } from '../../input/entities/input-details.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id_product: number;

  @Column()
  name_product: string;

  @Column()
  description: string;

  @Column()
  unit_price: number;

  @Column()
  quantity_available: number;

  @Column()
  until_box: boolean;


  //Relations
  //Category
  @ManyToOne(() => Category, (category) => category.products, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'categoy_id' })
  category: Category;

  //Output
  @OneToMany(() => Output, (output) => output.product, {
    eager: true,
  })
  outputs: Output[];

  //Input - Input Details
  @OneToMany(() => InputDetails, (InputDetails) => InputDetails.product, {
    eager: true,
  })
  input_details: InputDetails[];
}
