export default function NotificationsPanel() {
  return (
    <div className='relative flex items-center flex-col'>
      <div className='w-full pt-2 lg:p-0 lg:my-5 lg:max-w-xl top-full lg:border border-gray-100 max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:border-gray-700 dark:bg-black dark:divide-gray-700'>
        <div className='divide-y divide-gray-100 dark:divide-gray-700'>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/men/11.jpg'
                alt='Jese image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                New message from{' '}
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Jese Leos
                </span>
                : Hey, what&apos;s up? All set for the presentation?
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                a few moments ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/men/18.jpg'
                alt='Joseph image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Joseph Mcfall
                </span>{' '}
                and{' '}
                <span className='font-medium text-gray-900 dark:text-white'>
                  5 others
                </span>{' '}
                started following you.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                10 minutes ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/women/18.jpg'
                alt='Bonnie image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Bonnie Green
                </span>{' '}
                and{' '}
                <span className='font-medium text-gray-900 dark:text-white'>
                  141 others
                </span>{' '}
                love your story. See it and view more stories.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                44 minutes ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/women/17.jpg'
                alt='Leslie image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Leslie Livingston
                </span>{' '}
                mentioned you in a comment:{' '}
                <span className='font-medium text-blue-500'>@bonnie.green</span>{' '}
                what do you say?
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                1 hour ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/men/20.jpg'
                alt='Robert image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Robert Brown
                </span>{' '}
                posted a new video: Glassmorphism - learn how to implement the
                new design trend.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                3 hours ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/women/17.jpg'
                alt='Leslie image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Leslie Livingston
                </span>{' '}
                mentioned you in a comment:{' '}
                <span className='font-medium text-blue-500'>@bonnie.green</span>{' '}
                what do you say?
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                1 hour ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/men/25.jpg'
                alt='Robert image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Robert Brown
                </span>{' '}
                posted a new video: Glassmorphism - learn how to implement the
                new design trend.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                3 hours ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/women/17.jpg'
                alt='Leslie image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Leslie Livingston
                </span>{' '}
                mentioned you in a comment:{' '}
                <span className='font-medium text-blue-500'>@bonnie.green</span>{' '}
                what do you say?
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                1 hour ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/women/25.jpg'
                alt='Robert image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Sophia Brown
                </span>{' '}
                posted a new video: Glassmorphism - learn how to implement the
                new design trend.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                3 hours ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/women/17.jpg'
                alt='Leslie image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Leslie Livingston
                </span>{' '}
                mentioned you in a comment:{' '}
                <span className='font-medium text-blue-500'>@bonnie.green</span>{' '}
                what do you say?
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                1 hour ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/men/22.jpg'
                alt='Robert image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Robert Brown
                </span>{' '}
                posted a new video: Glassmorphism - learn how to implement the
                new design trend.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                3 hours ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/women/17.jpg'
                alt='Leslie image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Leslie Livingston
                </span>{' '}
                mentioned you in a comment:{' '}
                <span className='font-medium text-blue-500'>@bonnie.green</span>{' '}
                what do you say?
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                1 hour ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://randomuser.me/api/portraits/men/29.jpg'
                alt='Robert image'
              />
            </div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Robert Brown
                </span>{' '}
                posted a new video: Glassmorphism - learn how to implement the
                new design trend.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                3 hours ago
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
