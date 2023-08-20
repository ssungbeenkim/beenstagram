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
const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clicedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clicedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clicedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
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
                {pathname === item.href ? item.clicedIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton
            text='Sign in'
            onClick={() => {
              console.log('signin!!');
            }}
          />
        </ul>
      </nav>
    </div>
  );
}
