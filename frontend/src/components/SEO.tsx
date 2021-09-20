import Head from 'next/head';

export type SEOProps = {
  title?: string;
  isFullTitle?: boolean;
  description?: string;
};

const SEO: React.FC<SEOProps> = ({ title, isFullTitle, description }) => {
  const finalTitle = title
    ? `${title}${!isFullTitle && ' - Paisaflix'}`
    : 'Paisaflix';

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta property="og:title" content={finalTitle} />

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
    </Head>
  );
};

export default SEO;
