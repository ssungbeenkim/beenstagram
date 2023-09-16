import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import { parseDate } from '@/util/date';
import ToggleButton from './ui/ToggleButton';
import HeartFillIcon from './ui/icons/HeartFillIcon';
import BookmarkFillIcon from './ui/icons/BookmarkFillIcon';
import { SimplePost } from '@/model/post';

import usePosts from '@/hooks/posts';
import useMe from '@/hooks/me';
import React from 'react';
type Props = {
  post: SimplePost;
  children?: React.ReactNode;
};
export default function ActionBar({ post, children }: Props) {
  const { id, likes, createdAt } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
  };

  return (
    <>
      <div className='my-2 flex justify-between px-4'>
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <div className='px-4 py-1'>
        <p className='mb-2 text-sm font-bold'>{`${likes?.length ?? 0} ${
          likes?.length > 1 ? 'likes' : 'like'
        }`}</p>
        {children}
        <p className='my-2 text-xs uppercase text-neutral-500'>
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
}
