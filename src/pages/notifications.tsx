import NotificationsPanel from 'components/notifications/notificationsPanel';
import Header from 'components/notifications/header';
import AppLayout from 'layouts/appLayout';
import NavLayout from 'layouts/navLayout';

export default function Notifications() {
  return (
    <AppLayout title='Notifications | Chat App'>
      <NavLayout>
        <div className='lg:max-h-screen h-full lg:overflow-y-auto'>
          <Header />
          <NotificationsPanel />
        </div>
      </NavLayout>
    </AppLayout>
  );
}
