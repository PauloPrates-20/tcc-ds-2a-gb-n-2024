import Navbar from '@/app/components/Navbar'
import '@/styles/globals.css';

export const metadata = {
  title: {
    template: '%s | EZ Credencial',
    default: 'EZ Credencial',
  },
};

export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <body>
            <Navbar />
            {children}
        </body>
      </html>
    )
  }