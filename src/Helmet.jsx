import { Helmet } from "react-helmet";

const MyHelmet = () => {
  const PIC = "./images/coco.png";

  return (
    <Helmet>
      <title>POP_EVENT</title>
      <meta name="description" content="ROUGE COCO" />
      <meta property="og:title" content="ROUGE COCO" />
      <meta property="og:description" content="探索專屬您的COCO唇膏色選" />
      <meta
        property="og:image"
        content="https://popevent.netlify.app/images/coco.png?v=1"
      />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ROUGE COCO" />
      <meta name="twitter:description" content="探索專屬您的COCO唇膏色選" />
      <meta
        name="twitter:image"
        content="https://popevent.netlify.app/images/coco.png?v=1"
      />

      <link
        rel="icon"
        type="image/png"
        href="https://popevent.netlify.app/images/coco.png?v=1"
        sizes="32x32"
      />
      <link
        rel="shortcut icon"
        href="https://popevent.netlify.app/images/coco.png?v=1"
      />
    </Helmet>
  );
};

export default MyHelmet;
