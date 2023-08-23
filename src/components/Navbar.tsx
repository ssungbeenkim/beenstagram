'use client';
import Link from 'next/link';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import HomeIcon from './ui/icons/HomeIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import NewIcon from './ui/icons/NewIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from './ui/Avatar';
import { link } from 'fs';

const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className='flex items-center justify-between px-6'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>binstagram</h1>
      </Link>
      <nav>
        <ul className='flex items-center gap-4 p-4'>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} size={'small'} highlight />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text='Sign out' onClick={signOut} />
            ) : (
              <ColorButton text='Sign in' onClick={signIn} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
