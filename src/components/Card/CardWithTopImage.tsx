import { Image, ResponsiveImageType } from "react-datocms";
// components
import Card from "components/Card/Card";

type Props = {
  imageData: ResponsiveImageType;
  imageUrl?: string;
};

const CardWithTopImage: React.FC<Props> = ({ imageData, imageUrl, children }) => {
  return (
    <Card
      contentSlotBottom={
        <div className="flex-shrink-0 -order-1">
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt=""
              className="w-full object-cover rounded-t-xl"
              style={{ height: "220px" }}
            />
          ) : (
            /* eslint-disable-next-line jsx-a11y/alt-text */
            <Image
              layout="responsive"
              objectFit="cover"
              pictureClassName="rounded-t-xl"
              data={imageData}
            />
          )}
        </div>
      }
    >
      {children}
    </Card>
  );
};

export default CardWithTopImage;
