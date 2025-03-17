import { Inter } from 'next/font/google';
import UnderDevelopment from '@/app/under-development/page';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <UnderDevelopment />
    </>
  );
}
