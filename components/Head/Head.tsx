import NextHead from "next/head";

const title = "UI Components"
const description = "Collection of reusable UI Components"
const url = "https://theoplawinski.github.io/ui-components/"
const ogImage = "https://theoplawinski.github.io/ui-components/og-image.jpg"

const Head = () => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="og:image" content={ogImage} />
      <meta name="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@theoplawinski" />
      <meta name="author" content="Theo Plawinski" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <link rel="shortcut icon" href="favicon.ico" />
      {/* <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" /> */}
    </NextHead>
  );
};

export default Head;
