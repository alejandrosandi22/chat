import Image from 'next/image';

export default function Card({
  active,
  avatar,
  name,
  lastMessage,
  lastMessageDate,
}: ContactsCardProps) {
  return (
    <button className='block w-[95%] mx-auto cursor-pointer'>
      <div
        className={`w-full rounded flex py-2 px-4 ${
          active
            ? 'bg-primary-400 dark:bg-primary-900'
            : 'bg-white dark:bg-black hover:bg-primary-100 hover:dark:bg-primary-800'
        }`}
      >
        <Image
          className='w-12 h-12 rounded-full mb-2 mr-3'
          src={avatar}
          alt='Avatar'
          width={100}
          height={100}
        />
        <div className='text-start w-[55%] overflow-hidden'>
          <h6 className='text-base text-black dark:text-white'>{name}</h6>
          <p className='text-sm overflow-hidden whitespace-nowrap text-ellipsis text-gray-600 dark:text-gray-300'>
            {lastMessage}
          </p>
        </div>
        <p className='w-[30%] text-end whitespace-nowrap text-sm text-gray-600 dark:text-gray-300'>
          {lastMessageDate}
        </p>
      </div>
    </button>
  );
}
