import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AppLayout({ children, title }: AppLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      {children}
      <style jsx global>{`
        html,
        body {
          font-family: ${inter.style.fontFamily}, Roboto, system-ui,
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </>
  );
}
