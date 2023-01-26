import ContactsList from './contactsList';
import Search from './search';

export default function Contacts() {
  return (
    <div>
      <Search />
      <div>
        <ContactsList />
      </div>
    </div>
  );
}
