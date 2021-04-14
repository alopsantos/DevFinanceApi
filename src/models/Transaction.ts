import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('transactions')
export default class Transaction {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  date: Date;

}