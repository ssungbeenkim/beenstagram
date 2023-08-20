import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <Link href='/'>
        <h1>binstagram</h1>
      </Link>
      <nav>
        <ul></ul>
      </nav>
    </div>
  );
}
