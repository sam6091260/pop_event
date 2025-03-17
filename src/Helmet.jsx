import { Helmet } from "react-helmet";

const MyHelmet = () => {
    const PIC = "/images/RCC_2025_CMYK_ISOcoatedV2_T300_R300.svg";

    return (
        <Helmet>
            <title>POP_EVENT</title>
            <meta name="description" content="ROUGE COCO" />
            <meta property="og:title" content="ROUGE COCO" />
            <meta property="og:description" content="探索專屬您的COCO唇膏色選" />
            <meta property="og:image" content={PIC} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="ROUGE COCO" />
            <meta name="twitter:description" content="探索專屬您的COCO唇膏色選" />
            <meta name="twitter:image" content={PIC} />

            {/* 加入 favicon 設定 */}
            <link rel="icon" type="image/png" href={PIC} sizes="32x32" />
            <link rel="shortcut icon" href={PIC} />
        </Helmet>
    );
};

export default MyHelmet;
