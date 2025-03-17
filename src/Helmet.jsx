import { Helmet } from "react-helmet";
import PIC from "../public/images/RCC_2025_CMYK_ISOcoatedV2_T300_R300.svg"

const MyHelmet = () => {
    return (
        <div>
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
            </Helmet>
        </div>
    );
};

export default MyHelmet;
