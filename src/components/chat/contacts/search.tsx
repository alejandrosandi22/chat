export default function Search() {
  return (
    <div className='w-full flex items-center justify-between lg:justify-center gap-5 bg-white dark:bg-black h-16 px-5'>
      <div className='lg:hidden'>
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
      </div>
      <form>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z'
                fill='currentColor'
              />
            </svg>
          </div>
          <input
            type='search'
            className='block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 dark:bg-black dark:border-gray-400 dark:placeholder-gray-400 dark:text-white'
            placeholder='Search...'
          />
        </div>
      </form>
    </div>
  );
}
