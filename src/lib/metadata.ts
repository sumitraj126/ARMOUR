import { Metadata } from 'next';

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage
}: MetadataProps): Metadata {
  const defaultTitle = 'Armour Construction - Building Excellence';
  const defaultDescription = 'Professional construction services for commercial and residential projects. Quality craftsmanship and reliable project management.';
  const defaultKeywords = [
    'construction company',
    'building contractors',
    'commercial construction',
    'residential construction',
    'construction services',
    'building services',
    'renovation',
    'remodeling',
    'construction management'
  ];
  const defaultOgImage = '/images/og-image.jpg';

  return {
    title: title ? `${title} | Armour Construction` : defaultTitle,
    description: description || defaultDescription,
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title: title ? `${title} | Armour Construction` : defaultTitle,
      description: description || defaultDescription,
      url: 'https://armourconstruction.com',
      siteName: 'Armour Construction',
      images: [
        {
          url: ogImage || defaultOgImage,
          width: 1200,
          height: 630,
          alt: title || defaultTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | Armour Construction` : defaultTitle,
      description: description || defaultDescription,
      images: [ogImage || defaultOgImage],
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
    verification: {
      google: 'your-google-verification-code',
    },
  };
}
