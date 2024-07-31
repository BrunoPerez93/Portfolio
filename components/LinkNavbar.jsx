import Link from "next/link";

const LinkNavbar = ({href, onClick, name, className}) => {
  return (
    <Link
      className={className}
      href={href}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default LinkNavbar;
