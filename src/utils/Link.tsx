interface LinkProps {
  text: string,
  href: string
}

export default function Link({text, href}: LinkProps) {
  return (
    <a
      data-testid='link'
      target='_blank'
      rel='noopener noreferrer'
      href={href}>
      {text}
    </a>
  );
}
