import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL('https://mayurnikam.in'),
  title: {
    default: 'Mayur Nikam | DevOps Engineer & Cloud Specialist Portfolio',
    template: '%s | Mayur Nikam',
  },
  description: 'Mayur Nikam - DevOps Engineer specializing in AWS, Kubernetes, Docker, Ansible. Red Hat Certified (RHCSA & RHCE). B.Tech AI & Data Science student at MIT Aurangabad. Explore my cloud infrastructure projects and automation solutions.',
  keywords: [
    'Mayur Nikam',
    'DevOps Engineer',
    'Cloud Engineer',
    'AWS Specialist',
    'Kubernetes Expert',
    'Docker',
    'Ansible',
    'RHCSA',
    'RHCE',
    'Red Hat Certified',
    'CI/CD',
    'Infrastructure as Code',
    'Cloud Computing',
    'MIT Aurangabad',
    'DevOps Portfolio',
    'Cloud Architecture',
    'Container Orchestration',
    'Automation Engineer',
    'Linux Administration',
    'Python Developer',
    'Bash Scripting',
  ],
  authors: [{ name: 'Mayur Nikam', url: 'https://github.com/mayurnikam266' }],
  creator: 'Mayur Nikam',
  publisher: 'Mayur Nikam',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mayurnikam.in',
    title: 'Mayur Nikam | DevOps Engineer & Cloud Specialist',
    description: 'Professional DevOps Engineer specializing in AWS, Kubernetes, Docker, and Ansible. Red Hat Certified with expertise in cloud infrastructure and automation.',
    siteName: 'Mayur Nikam Portfolio',
    images: [
      {
        url: '/passport-photo.jpeg',
        width: 800,
        height: 800,
        alt: 'Mayur Nikam - DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayur Nikam | DevOps Engineer & Cloud Specialist',
    description: 'Professional DevOps Engineer specializing in AWS, Kubernetes, Docker, and Ansible. Red Hat Certified.',
    images: ['/passport-photo.jpeg'],
    creator: '@mayurnikam',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://mayurnikam.in',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mayur Nikam',
              url: 'https://mayurnikam.in',
              image: 'https://mayurnikam.in/passport-photo.jpeg',
              jobTitle: 'DevOps Engineer',
              worksFor: {
                '@type': 'EducationalOrganization',
                name: 'Maharashtra Institute of Technology, Aurangabad',
              },
              alumniOf: 'Maharashtra Institute of Technology, Aurangabad',
              knowsAbout: [
                'DevOps',
                'AWS',
                'Kubernetes',
                'Docker',
                'Ansible',
                'CI/CD',
                'Cloud Computing',
                'Linux Administration',
              ],
              sameAs: [
                'https://github.com/mayurnikam266',
                'https://linkedin.com/in/mayur-nikam266',
              ],
              email: 'mailto:mayurnikam266@gmail.com',
              description: 'DevOps Engineer specializing in AWS, Kubernetes, Docker, and Ansible. Red Hat Certified (RHCSA & RHCE).',
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
