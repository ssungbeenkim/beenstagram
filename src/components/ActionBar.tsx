import { parseDate } from '@/util/data';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';

type Props = {
  likes: string[];
  username: string;
  text: string;
  createdAt: string;
};
export default function ActionBar({ likes, username, text, createdAt }: Props) {
  return (
    <>
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
      </div>
    </>
  );
}
