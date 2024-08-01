import Image from "next/image";

const ImageComponent = ({ src, alt, width, height, classname }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${classname} rounded-xl`}
      objectFit="cover"
    />
  );
};

export default ImageComponent;
