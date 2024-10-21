import Link from 'next/link';

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <aside>
        <nav>
          <Link
            href='/posts/1'
            className='block w-[400px] px-4 py2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Posts1
          </Link>
          <Link
            href='/posts/2'
            className='block w-[400px] px-4 py2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Posts2
          </Link>
          <Link
            href='/posts/3'
            className='block w-[400px] px-4 py2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Posts3
          </Link>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
