import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity, OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  displayUsername: string;

  @OneToOne(() => User, (user) => user.profile)
  user: Promise<User>;
}
