import NextHead from "next/head";

const title = "UI Components";
const description = "Collection of reusable UI Components";
const url = "https://theoplawinski.github.io/ui-components/";
const ogImage = "https://theoplawinski.github.io/ui-components/og-image.jpg";

const Head = () => {
  return (
    <NextHead>
      {/* General */}
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />

      <meta name="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={ogImage} />
      <meta name="og:url" content={url} />
      <meta name="author" content="Theo Plawinski" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@theoplawinski" />
      <meta name="twitter:creator" content="@theoplawinski" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#ff424d" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </NextHead>
  );
};

export default Head;
