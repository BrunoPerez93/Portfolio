import Image from "next/image";

const ImageComponent = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={50} height={50} objectFit="cover" />;
};

export default ImageComponent;
