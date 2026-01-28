import Link from "next/link";

type IconBtnProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

const IconBtn = ({ href, label, children, className = "" }: IconBtnProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className={className}
  >
    {children}
  </Link>
);

export default IconBtn;
