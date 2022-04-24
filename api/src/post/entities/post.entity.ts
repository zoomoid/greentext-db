import { Author } from 'src/author/entities/author.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  imageURL: string;

  @Column({
    unique: true,
  })
  postURL: string;

  @OneToOne(() => Author)
  author: Author;

  @ManyToMany(() => Author)
  @JoinTable()
  contributors: Author[];

  @Column({ default: false })
  nsfw: boolean;

  @Column({ default: true })
  isVisible: boolean;

  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable({})
  tags: Tag[];
}
