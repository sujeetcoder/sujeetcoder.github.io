import { Helmet } from "react-helmet-async";
import { seoData } from "../database/seo";
import { personalInfo } from "../database/personal";

export default function SEO({ title, description, image, url }) {
  const pageTitle = title || seoData.title;
  const pageDescription = description || seoData.description;
  const pageImage = image || seoData.image;
  const pageUrl = url || seoData.url;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <meta name="author" content={personalInfo.name} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:type" content={seoData.type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={seoData.siteName} />
      <meta property="og:locale" content={seoData.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoData.twitterHandle} />
      <meta name="twitter:creator" content={seoData.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
