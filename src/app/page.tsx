'use client';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className='space-x-4'>
        <Link href='/login' className='px-4 bg-blue-500 text-white rounded'>
          Login Page
        </Link>
      </div>
      <div className='space-x-4'>
        <Link href='/register' className='px-4 bg-blue-500 text-white rounded'>
          Register Page
        </Link>
      </div>
      <div className='space-x-4'>
        <Link
          href='/forget-password '
          className='px-4 bg-blue-500 text-white rounded'
        >
          Forget Password
        </Link>
      </div>
    </div>
  );
};

export default Home;
