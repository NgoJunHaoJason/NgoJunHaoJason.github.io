interface LinkProps {
  text: string,
  href: string
}

const Link = ({text, href}: LinkProps): JSX.Element => {
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

export default Link;
