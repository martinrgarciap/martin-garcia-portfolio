import IconBtn from "../iconbtn";

type SocialLinksProps = {
  compact?: boolean;
};

const links = [
  {
    label: "GitHub",
    href: "https://github.com/martinrgarciap",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .5C5.649.5.5 5.649.5 12a11.5 11.5 0 0 0 7.86 10.916c.575.105.785-.25.785-.556 0-.273-.01-1-.016-1.961-3.197.695-3.873-1.54-3.873-1.54-.523-1.328-1.277-1.682-1.277-1.682-1.043-.713.08-.699.08-.699 1.154.081 1.761 1.185 1.761 1.185 1.025 1.758 2.69 1.25 3.344.955.104-.743.401-1.25.729-1.538-2.552-.291-5.236-1.276-5.236-5.681 0-1.255.448-2.281 1.183-3.086-.119-.291-.513-1.463.113-3.05 0 0 .965-.309 3.163 1.178A10.97 10.97 0 0 1 12 6.03c.973.004 1.954.131 2.87.385 2.196-1.487 3.16-1.178 3.16-1.178.628 1.587.234 2.759.115 3.05.737.805 1.182 1.831 1.182 3.086 0 4.416-2.688 5.386-5.248 5.671.412.356.779 1.058.779 2.133 0 1.54-.014 2.782-.014 3.16 0 .309.207.667.791.554A11.502 11.502 0 0 0 23.5 12C23.5 5.649 18.351.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martin-garcia-prieto/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.983 3.5A2.483 2.483 0 1 0 4.983 8.466 2.483 2.483 0 0 0 4.983 3.5ZM3 9.75h3.966V21H3V9.75ZM9.417 9.75h3.804v1.536h.054c.53-1.005 1.824-2.067 3.754-2.067 4.014 0 4.754 2.642 4.754 6.078V21h-3.966v-5.055c0-1.206-.021-2.758-1.681-2.758-1.683 0-1.94 1.315-1.94 2.672V21H9.417V9.75Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:martinrgarciap@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 6.75H20C20.69 6.75 21.25 7.31 21.25 8V16C21.25 16.69 20.69 17.25 20 17.25H4C3.31 17.25 2.75 16.69 2.75 16V8C2.75 7.31 3.31 6.75 4 6.75Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M3.5 8L12 13.75L20.5 8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}>
      {links.map((item) => (
        <IconBtn
          key={item.label}
          href={item.href}
          label={item.label}
          className={compact ? "h-10 w-10" : ""}
        >
          {item.icon}
        </IconBtn>
      ))}
    </div>
  );
}
