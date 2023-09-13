'use client';
import usePost from '@/hooks/posts';
import PostListCard from './PostListCard';

import GridSpinner from './ui/GridSpinner';

export default function PostList() {
  const { posts, isLoading: loading } = usePost();
  return (
    <section>
      {loading && (
        <div className='mt-32 text-center'>
          <GridSpinner color='red' />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li className='mb-4' key={post.id}>
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
