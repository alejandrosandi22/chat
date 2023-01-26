import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='z-50 fixed bottom-0 lg:relative h-16 w-full lg:h-full lg:w-16 flex flex-row lg:flex-col justify-between items-center py-8 bg-white dark:bg-black'>
      <div className='hidden lg:block'>
        <Link href='/chat'>
          <svg
            className='h-8 w-7 text-primary-700 dark:text-white'
            viewBox='0 0 315 365'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='9.38094'
              y1='349.409'
              x2='113.381'
              y2='3.40928'
              stroke='currentColor'
              strokeWidth='18'
            />
            <line
              x1='92.3312'
              y1='356.581'
              x2='188.331'
              y2='12.5808'
              stroke='currentColor'
              strokeWidth='18'
            />
            <line
              x1='223.454'
              y1='361.822'
              x2='188.454'
              y2='255.822'
              stroke='currentColor'
              strokeWidth='18'
            />
            <line
              x1='141'
              y1='261'
              x2='197'
              y2='261'
              stroke='currentColor'
              strokeWidth='18'
            />
            <line
              x1='1'
              y1='355'
              x2='101'
              y2='355'
              stroke='currentColor'
              strokeWidth='18'
            />
            <line
              x1='215'
              y1='355'
              x2='314'
              y2='355'
              stroke='currentColor'
              strokeWidth='18'
            />
            <line
              x1='188.486'
              y1='18.002'
              x2='306.486'
              y2='352.002'
              stroke='currentColor'
              strokeWidth='18'
            />
          </svg>
        </Link>
      </div>
      <ul className='flex lg:flex-col items-center justify-around w-full lg:space-y-3'>
        <li>
          <Link
            href='/chat'
            className='lg:hover:bg-primary-200 lg:dark:hover:bg-primary-700 lg:p-2 rounded-md flex flex-col items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-6 h-6 text-primary-700 dark:text-white'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z'
                fill='currentColor'
              />
            </svg>
          </Link>
          <span className='lg:hidden text-xs text-primary-700 dark:text-white'>
            Chat
          </span>
        </li>
        <li>
          <Link
            href='/notifications'
            className='lg:hover:bg-primary-200 lg:dark:hover:bg-primary-700 lg:p-2 rounded-md flex flex-col items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-6 h-6 text-primary-700 dark:text-white'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z'
                fill='currentColor'
              />
            </svg>
          </Link>
          <span className='lg:hidden text-xs text-primary-700 dark:text-white'>
            Notifications
          </span>
        </li>
        <li>
          <Link
            href='/profile'
            className='lg:hover:bg-primary-200 lg:dark:hover:bg-primary-700 lg:p-2 rounded-md flex flex-col items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-6 h-6 text-primary-700 dark:text-white'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z'
                fill='currentColor'
              />
            </svg>
            <span className='lg:hidden text-xs text-primary-700 dark:text-white'>
              Profile
            </span>
          </Link>
        </li>
        <li className='lg:hidden'>
          <button className='flex flex-col items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-6 h-6 text-primary-700 dark:text-white'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z'
                fill='currentColor'
              />
            </svg>
            <span className='text-xs text-primary-700 dark:text-white'>
              Sign out
            </span>
          </button>
        </li>
      </ul>
      <button className='hidden lg:block'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='w-6 h-6 text-primary-700 dark:text-white'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z'
            fill='currentColor'
          />
        </svg>
      </button>
    </nav>
  );
}
