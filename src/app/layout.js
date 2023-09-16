import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogify',
  description: 'Created with Next js by Ilef Chebil',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <div className="container">
        <Navbar />
        {children}
        <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
