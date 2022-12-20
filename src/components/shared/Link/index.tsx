import "./index.css";

interface LinkProps {
  testId?: string;
  content: string | JSX.Element;
  href: string;
}

const Link = ({ testId = "link", content, href }: LinkProps): JSX.Element => {
  return (
    <a
      data-testid={testId}
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
