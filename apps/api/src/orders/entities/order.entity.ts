import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "../../products/entities/product.entity";
import {JoinTable} from "typeorm/browser";
import {User} from "../../users/entities/user.entity";
import {OrderItem} from "./order-item.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => OrderItem, (item) => item.order, {cascade: true})
  items: OrderItem[];

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column()
  status: string;
}
