import DeleteAccount from 'components/profile/deleteAccount';
import Header from 'components/profile/header';
import Settings from 'components/profile/settings';
import UserInformation from 'components/profile/userInformation';
import AppLayout from 'layouts/appLayout';
import NavLayout from 'layouts/navLayout';

export default function Profile() {
  return (
    <>
      <AppLayout title='Thomas Gould | Chat App'>
        <NavLayout>
          <div className='profile-container h-full'>
            <Header />
            <div className='grid place-items-center h-full'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-8 lg:bg-white lg:dark:bg-black rounded-lg lg:p-10 lg:border lg:border-gray-300 lg:dark:border-gray-600'>
                <UserInformation />
                <div className='space-y-3'>
                  <Settings />
                  <DeleteAccount />
                </div>
              </div>
            </div>
          </div>
        </NavLayout>
      </AppLayout>

      <style jsx>{`
        .profile-container {
          display: grid;
          grid-template-rows: 4rem 1fr;
        }
      `}</style>
    </>
  );
}
