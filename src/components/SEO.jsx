import { Helmet } from "react-helmet-async";
import { seoData } from "../database/seo";
import { personalInfo } from "../database/personal";

export default function SEO({ title, description }) {
  const pageTitle = title || seoData.title;
  const pageDescription = description || seoData.description;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <meta name="author" content={personalInfo.name} />
      <link rel="canonical" href={seoData.url} />
    </Helmet>
  );
}
