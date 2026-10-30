import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://hemjoshi.vercel.app'
  ),
  title: {
    default: `${siteConfig.profile.name} — Full-Stack Developer & AI Automation`,
    template: `%s | ${siteConfig.profile.name}`,
  },
  description:
    'Full-Stack Developer and AI Engineer based in Ahmedabad, India. Specializing in business web applications, custom management software, REST APIs, and pragmatic RAG-based AI automation.',
  keywords: [
    'Hem Joshi',
    'Full-Stack Developer',
    'AI Engineer',
    'AI Automation',
    'Next.js Developer',
    'FastAPI Developer',
    'Python Freelancer',
    'Ahmedabad Developer',
    'Custom Business Software',
    'RAG Document Assistant',
    'Nexus ERP',
  ],
  authors: [{ name: siteConfig.profile.name, url: siteConfig.profile.github }],
  creator: siteConfig.profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: `${siteConfig.profile.name} — Full-Stack Developer & AI Automation`,
    description:
      'Building digital products that solve real business problems. Custom business applications, product catalogues, and practical AI automation.',
    siteName: `${siteConfig.profile.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.profile.name} — Full-Stack Developer & AI Automation`,
    description:
      'Building digital products that solve real business problems. Full-stack applications and AI automation.',
    creator: '@hemjoshiwork',
  },
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
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.profile.name,
    jobTitle: 'Full-Stack Developer & AI Engineer',
    url: 'https://github.com/hemjoshiwork',
    sameAs: [siteConfig.profile.linkedin, siteConfig.profile.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: siteConfig.profile.university,
    },
    knowsAbout: [
      'Web Development',
      'Full-Stack Applications',
      'Python',
      'FastAPI',
      'Next.js',
      'React',
      'Artificial Intelligence',
      'Retrieval-Augmented Generation',
      'LangChain',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B0F17] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
