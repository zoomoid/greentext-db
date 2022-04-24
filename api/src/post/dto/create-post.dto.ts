export class CreatePostDto {
  imageURL?: string;
  postURL?: string;
  tags: string[];
  nsfw: boolean;
}
