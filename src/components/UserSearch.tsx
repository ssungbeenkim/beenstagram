'use client';
import { ProfileUser } from '@/model/user';
import { FormEvent, useState } from 'react';
import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';
import UserCard from './UserCard';

export default function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<ProfileUser[]>(`/api/search/${keyword}`);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className='my-4 flex w-full max-w-2xl flex-col items-center'>
      <form className='mb-4 w-full' onSubmit={onSubmit}>
        <input
          className='w-full border border-gray-400 p-3 text-xl outline-none'
          type='text'
          autoFocus
          placeholder='Search for a username or name'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>Something went wrong...🚨</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && <p>User not found 👶🏻</p>}
      <ul className='w-full p-4'>
        {users &&
          users?.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
