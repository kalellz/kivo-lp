import "./globals.css";
import localFont from 'next/font/local'

const sfProRounded = localFont({
  src: [
    {
      path: '../assets/fonts/SF-Pro-Rounded-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Rounded-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Rounded-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Rounded-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Rounded-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Rounded-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Rounded-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Rounded-Thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Rounded-Ultralight.otf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-rounded',
})

export const metadata = {
  title: "Kivo",
  description: "A nova era da produção musical com IA.",
  icons: {
    icon: '/favicon.png', // Path to the favicon
    //apple: '/apple-touch-icon.png', // Path to the apple touch icon (optional)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sfProRounded.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
