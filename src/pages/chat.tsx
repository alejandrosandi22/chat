import Contacts from 'components/chat/contacts';
import AppLayout from 'layouts/appLayout';
import NavLayout from 'layouts/navLayout';

export default function Chat() {
  return (
    <>
      <AppLayout title='Chat | Chat App'>
        <NavLayout>
          <div>
            <Contacts />
            <section></section>
          </div>
        </NavLayout>
      </AppLayout>

      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: 1fr 0;
          transition: grid 0.5s;
        }
        @media (min-width: 1024px) {
          div {
            display: grid;
            grid-template-columns: 30% 70%;
          }
        }
      `}</style>
    </>
  );
}
