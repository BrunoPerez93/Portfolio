import Link from "next/link";

const LinkComponent = ({ href, children }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};

export default LinkComponent;
