import useMe from '@/hooks/me';
import useFullPosts from '@/hooks/post';
import { FullPost, SimplePost } from '@/model/post';
import Image from 'next/image';
import userSWR from 'swr';
import ActionBar from './ActionBar';
import Avatar from './Avatar';
import CommentForm from './CommentForm';
import PostUserAvatar from './PostUserAvatar';

type Props = {
  post: SimplePost;
};
export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image } = post;
  const { post: data, postComment } = useFullPosts(id);
  const { user } = useMe();
  const comments = data?.comments;
  const handlePostComment = (comment: string) => {
    user &&
      postComment({ comment, username: user.username, image: user.image });
  };

  return (
    <section className='flex h-full w-full'>
      <div className='relative basis-3/5'>
        <Image
          className='object-cover'
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes='650px'
        />
      </div>
      <div className='flex w-full basis-2/5 flex-col'>
        <PostUserAvatar image={userImage} username={username} />
        <ul className='mb-1 h-full overflow-y-auto border-t border-gray-200 p-4'>
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index} className='mb-1 flex items-center'>
                  <Avatar
                    image={image}
                    size='small'
                    highlight={commentUsername === username}
                  />
                  <div className='ml-2'>
                    <span className='mr-1 font-bold'>{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar post={post} />
        <CommentForm onPostComment={handlePostComment} />
      </div>
    </section>
  );
}
