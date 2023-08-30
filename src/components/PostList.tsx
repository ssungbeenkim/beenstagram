'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import PostListCard from './postListCard';
import GridSpinner from './ui/GridSpinner';

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>('api/posts');
  return (
    <section>
      {loading && (
        <div className='mt-32 text-center'>
          <GridSpinner color='red' />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li className='mb-4' key={post.id}>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
