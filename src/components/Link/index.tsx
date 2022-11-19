import "components/Link/index.css";

interface LinkProps {
  content: string | JSX.Element;
  href: string;
}

const Link = ({ content, href }: LinkProps): JSX.Element => {
  return (
    <a
      data-testid="link"
      className="Link"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {content}
    </a>
  );
};

export default Link;
