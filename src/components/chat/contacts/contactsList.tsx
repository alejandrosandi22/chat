import Card from './card';

const CONTACTS: ContactsCardProps[] = [
  {
    active: true,
    avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
    name: 'Thomas Gould',
    lastMessage: 'Definitely. Talk to you later!',
    lastMessageDate: '9:30 pm',
  },
  {
    active: false,
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Emmanuelle Voisin',
    lastMessage: 'You: ok',
    lastMessageDate: 'Yesterday',
  },
  {
    active: false,
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    name: 'Sarah Peterson',
    lastMessage: 'You: see you there',
    lastMessageDate: '3 days ago',
  },
  {
    active: false,
    avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    name: 'Alexander Williams',
    lastMessage: 'Is on monday',
    lastMessageDate: 'a week ago',
  },
];

export default function ContactsList() {
  return (
    <div className='w-full space-y-6 mt-10'>
      {CONTACTS.map((contact) => (
        <Card key={contact.lastMessage} {...contact} />
      ))}
    </div>
  );
}
