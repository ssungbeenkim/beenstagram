import { SimplePost } from '@/model/post';
import { parseDate } from '@/util/data';
import Image from 'next/image';
import Avatar from './ui/Avatar';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import SmileIcon from './ui/icons/SmileIcon';

type Props = {
  post: SimplePost;
};
export default function PostListCard({ post }: Props) {
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
      />
      <div className='my-2 mt-4 flex justify-between'>
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className='px-4 py-1'>
        <p className='mb-2 text-sm font-bold'>{`${likes?.length ?? 0} ${
          likes?.length > 1 ? 'likes' : 'like'
        }`}</p>
        <p>
          <span className='mr-1 font-bold'>{username}</span>
          {text}
        </p>
        <p className='my-2 text-xs uppercase text-neutral-500'>
          {parseDate(createdAt)}
        </p>
        <form className='flex items-center border-t border-neutral-300'>
          <SmileIcon />
          <input
            className='ml-2 w-full border-none p-3 outline-none'
            type='text'
            placeholder='Add a comment...'
          />
          <button className='font-bold text-sky-500'>Post</button>
        </form>
      </div>
    </article>
  );
}
