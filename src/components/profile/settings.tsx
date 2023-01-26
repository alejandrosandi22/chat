import { useTheme } from 'next-themes';

export default function Settings() {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <div className='py-7 px-5 space-y-5 max-w-xl mx-auto'>
      <h2 className='text-xl'>Personal information</h2>
      <div className='flex justify-between'>
        <h3 className='text-lg'>Name</h3>
        <p className='text-base text-gray-600 dark:text-gray-300'>
          Thomas Gould
        </p>
      </div>
      <div className='flex justify-between'>
        <h3 className='text-lg'>Email</h3>
        <p className='text-base text-gray-600 dark:text-gray-300'>
          thomasgould@gmail.com
        </p>
      </div>
      <div className='flex justify-between'>
        <h3 className='text-lg'>Username</h3>
        <p className='text-base text-gray-600 dark:text-gray-300'>
          @thomasgould
        </p>
      </div>
      <h2 className='text-xl pt-5'>Display</h2>
      <div className='flex justify-between'>
        <span className='w-1/2'>
          <h3 className='text-lg'>Dark mode</h3>
          <span className='text-base text-gray-600 dark:text-gray-300'>
            Choose how you want to see the chat
          </span>
        </span>
        <select
          name='theme'
          id='theme'
          defaultValue={theme === 'system' ? systemTheme : theme}
          onChange={(e) => setTheme(e.target.value)}
          className='h-min bg-white-secondary border border-gray-300 text-gray-900 text-sm rounded-md p-2.5 dark:bg-black-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
        >
          <option value='system'>Device</option>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </div>
    </div>
  );
}
