import Image from 'next/image';

export default function UserInformation() {
  return (
    <div className='flex flex-col items-center py-7'>
      <Image
        className='w-28 h-28 rounded-full mb-2'
        src='https://randomuser.me/api/portraits/men/18.jpg'
        alt='Avatar'
        width={100}
        height={100}
      />
      <h2 className='text-xl font-bold text-black dark:text-white'>
        Thomas Gould
      </h2>
      <p className='text-base text-gray-600 dark:text-gray-300'>
        thomasgould@gmail.com
      </p>
    </div>
  );
}
