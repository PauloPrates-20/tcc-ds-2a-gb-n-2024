import Navbar from '@/app/components/Navbar'
import '@/styles/globals.css';
import { Arvo } from 'next/font/google';

export const metadata = {
  title: {
    template: '%s | EZ Credencial',
    default: 'EZ Credencial',
  },
};

const arvo = Arvo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'] 
})

export const revalidate = 300;

export default function RootLayout({ children }) {
    return (
      <html lang='en' className={arvo.className}>
        <body>
            <Navbar />
            {children}
        </body>
      </html>
    )
  }