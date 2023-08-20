'use client';
import Link from 'next/link';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import HomeIcon from './ui/icons/HomeIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import NewIcon from './ui/icons/NewIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import { usePathname } from 'next/navigation';
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
    <div>
      <Link href='/'>
        <h1>binstagram</h1>
      </Link>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clicedIcon : item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
