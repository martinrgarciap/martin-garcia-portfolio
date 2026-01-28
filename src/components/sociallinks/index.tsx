import IconBtn from "@/components/iconbtn";

const SocialLinks = () => (
  <div className="flex items-center gap-3 m-3">
    <IconBtn href="https://github.com/martinrgarciap" label="GitHub">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.26.79-.57v-2.1c-3.2.71-3.87-1.38-3.87-1.38-.52-1.36-1.27-1.72-1.27-1.72-1.04-.73.08-.72.08-.72 1.15.08 1.76 1.2 1.76 1.2 1.02 1.77 2.68 1.26 3.33.96.1-.76.4-1.26.72-1.55-2.55-.3-5.23-1.3-5.23-5.78 0-1.28.45-2.32 1.19-3.14-.12-.3-.52-1.5.11-3.13 0 0 .97-.32 3.18 1.2a10.7 10.7 0 0 1 5.8 0c2.2-1.52 3.17-1.2 3.17-1.2.64 1.63.24 2.83.12 3.13.74.82 1.19 1.86 1.19 3.14 0 4.5-2.69 5.47-5.25 5.77.41.37.78 1.1.78 2.22v3.29c0 .31.21.69.8.57A11.5 11.5 0 0 0 23.25 12C23.25 5.62 18.27.5 12 .5z" />
      </svg>
    </IconBtn>

    <IconBtn
      href="https://www.linkedin.com/in/martin-garcia-prieto/"
      label="LinkedIn"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3.5 9h3v12h-3V9zm7 0h2.9v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-6.1c0-1.46-.02-3.34-2.04-3.34-2.04 0-2.35 1.6-2.35 3.24V21h-3V9z" />
      </svg>
    </IconBtn>

    <IconBtn href="https://linktr.ee/martinrgarciap" label="Linktree">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M12 2l2.6 4.4h5L16 10l3.6 6.2h-5L12 12.5 9.4 16.2h-5L8 10 4.4 6.4h5L12 2zm0 12.2L13.2 16v6h-2.4v-6L12 14.2z" />
      </svg>
    </IconBtn>
  </div>
);

export default SocialLinks;
