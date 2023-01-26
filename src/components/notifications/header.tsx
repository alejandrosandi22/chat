import Link from 'next/link';

export default function Header() {
  return (
    <header className='relative h-16 bg-white dark:bg-black flex justify-center items-center'>
      <Link href='/chat' className='lg:hidden absolute left-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='h-8 w-8 text-primary-700 dark:text-white'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z'
            fill='currentColor'
          />
        </svg>
      </Link>
      <h2 className='lg:hidden text-lg font-medium text-black dark:text-white'>
        Notifications
      </h2>
    </header>
  );
}
