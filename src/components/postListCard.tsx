'use client';

import { SimplePost } from '@/model/post';
import Image from 'next/image';
import { useState } from 'react';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import PostDetail from './PostDetail';
import PostModal from './PostModal';
import PostUserAvatar from './PostUserAvatar';

import Avatar from './ui/Avatar';
import MordalPortal from './ui/MordalPortal';

type Props = {
  post: SimplePost;
  priority?: boolean;
};
export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);
  return (
    <article className='border-200-gray rounded-lg border shadow-md'>
      <PostUserAvatar image={userImage} username={username} />
      <Image
        className='aspect-square w-full object-cover'
        src={image}
        alt={`Photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar post={post} />
      <CommentForm />
      {openModal && (
        <MordalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </MordalPortal>
      )}
    </article>
  );
}
