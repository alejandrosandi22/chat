import Nav from 'components/shared/nav';

export default function NavLayout({ children }: NavLayoutProps) {
  return (
    <>
      <div className='nav-container min-h-screen bg-white-secondary dark:bg-black-secondary'>
        <div className='nav-area'>
          <Nav />
        </div>
        <div className='content-area'>{children}</div>
      </div>

      <style jsx>{`
        .nav-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 4rem;
        }
        .nav-area {
          grid-area: 2 / 1 / 3 / 2;
        }
        .content-area {
          grid-area: 1 / 1 / 2 / 2;
        }
        @media (min-width: 1024px) {
          .nav-container {
            grid-template-columns: 4rem 1fr;
            grid-template-rows: 1fr;
          }
          .nav-area {
            grid-area: 1 / 1 / 2 / 2;
          }
          .content-area {
            grid-area: 1 / 2 / 2 / 3;
          }
        }
      `}</style>
    </>
  );
}
