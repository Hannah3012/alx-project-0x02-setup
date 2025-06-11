import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const Header = () => {
  const router = useRouter();

  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/posts', label: 'Posts' },
  ];

  return (
    <header className="bg-gray-100 shadow p-4">
      <nav className="flex space-x-6">
        {navItems.map(({ href, label }) => (
          <Link key={href} href={href}>
            <span
              className={clsx(
                'cursor-pointer text-gray-700 hover:text-blue-600',
                router.pathname === href && 'font-semibold text-blue-700'
              )}
            >
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

