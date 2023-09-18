'use client';
import useMe from '@/hooks/me';
import { ProfileUser } from '@/model/user';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { PulseLoader } from 'react-spinners';
import Button from './ui/Button';

type Props = {
  user: ProfileUser;
};
export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedInUser, toggleFollow } = useMe();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isToggling, setIsToggling] = useState(false);
  const isUpdating = isPending || isToggling;

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);

  const text = following ? 'Unfollow' : 'Follow';

  const handleFollow = async () => {
    setIsToggling(true);
    await toggleFollow(user.id, !following);
    setIsToggling(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      {showButton && (
        <div className='relative'>
          {isUpdating && (
            <div className='absolute inset-0 z-20 flex items-center justify-center'>
              <PulseLoader size={6} />
            </div>
          )}
          <Button
            disabled={isUpdating}
            text={text}
            onClick={handleFollow}
            red={text === 'Unfollow'}
          />
        </div>
      )}
    </>
  );
}
