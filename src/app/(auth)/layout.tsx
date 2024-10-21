'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const navLink = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forget-password', href: '/forget-password' },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const panthname = usePathname();
  console.log(panthname);

  return (
    <div>
      <nav className='gap-10 flex flex-col'>
        {navLink.map((link) => {
          const isActive = panthname.startsWith(link.href);
          return (
            <div key={link.name}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded bg-blue-500  ${
                  isActive ? 'bg-blue-500' : 'bg-blue-700'
                }`}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </nav>
      <main>{children}</main>
    </div>
  );
}
