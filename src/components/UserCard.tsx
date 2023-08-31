import { ProfileUser } from '@/model/user';
import Link from 'next/link';
import Avatar from './ui/Avatar';

type Props = {
  user: ProfileUser;
};
export default function UserCard({
  user: { name, username, image, following, followers },
}: Props) {
  return (
    <Link
      href={`/user/${username}`}
      className='mb-2 flex w-full items-center rounded-sm border border-neutral-300 bg-white p-4 hover:bg-neutral-50'
    >
      <div className='mr-4'>
        <Avatar image={image} />
      </div>
      <div className='text-neutral-500'>
        <p className='font-bold leading-4 text-black'>{username}</p>
        <p>{name}</p>
        <p className='text-sm leading-4'>{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
}
