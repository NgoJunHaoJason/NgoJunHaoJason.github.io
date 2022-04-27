interface LinkProps {
  text: string,
  href: string
}

export default ({text, href}: LinkProps): JSX.Element => {
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
