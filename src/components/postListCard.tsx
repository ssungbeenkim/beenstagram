import { SimplePost } from '@/model/post';
import Image from 'next/image';
import ActionBar from './ActionBar';
import CommentForm from './commentForm';

import Avatar from './ui/Avatar';

type Props = {
  post: SimplePost;
  priority?: boolean;
};
export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <article className='border-200-gray rounded-lg border shadow-md'>
      <div className='flex items-center p-2'>
        <Avatar image={userImage} size='medium' highlight />
        <span className='text-grey-900 ml-2 font-bold'>{username}</span>
      </div>
      <Image
        className='aspect-square w-full object-cover'
        src={image}
        alt={`Photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <ActionBar
        likes={likes}
        username={username}
        createdAt={createdAt}
        text={text}
      />
      <CommentForm />
    </article>
  );
}
