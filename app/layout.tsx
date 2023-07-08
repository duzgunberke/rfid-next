import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RFID Next',
  description: 'RFID Card Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app">
        <Header />
          <Sidebar>
            {children}
          </Sidebar>
        </main>
      </body>
    </html>
  )
}
