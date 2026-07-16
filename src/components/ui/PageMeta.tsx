import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    const pageTitle = title === 'Karya Rotan Indonesia' ? title : `${title} | PT Karya Rotan Indonesia`;
    document.title = pageTitle;
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    descriptionTag?.setAttribute('content', description);
    ogTitle?.setAttribute('content', pageTitle);
    ogDescription?.setAttribute('content', description);
  }, [description, title]);

  return null;
}
