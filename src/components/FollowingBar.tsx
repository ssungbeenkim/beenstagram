'use client';
import { DetailUser } from '@/model/user';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Avatar from './ui/Avatar';
export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;
  return (
    <section className='mb-4 flex min-h-[90px] w-full items-center justify-center overflow-x-auto rounded-lg p-4 shadow-sm shadow-neutral-300'>
      {loading ? (
        <PropagateLoader size={8} color='red' />
      ) : (
        (!users || users.length === 0) && <p>{`Not following anyone`}</p>
      )}
      {users && users.length > 0 && (
        <ul className='flex w-full gap-2'>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link
                className='flex w-20 flex-col items-center'
                href={`/user/${username}`}
              >
                <Avatar image={image} highlight />
                <p className='w-full overflow-hidden text-ellipsis text-center text-sm'>
                  {username}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
