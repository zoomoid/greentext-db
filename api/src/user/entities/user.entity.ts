import { Author } from 'src/author/entities/author.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Author, (author) => author.user)
  profile: Promise<Author>;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isConfirmed: boolean;

  @Column({ unique: true })
  registrationToken: string;
}
