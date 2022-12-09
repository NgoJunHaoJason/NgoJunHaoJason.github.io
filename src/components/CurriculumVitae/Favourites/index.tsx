import { faHeart } from "@fortawesome/free-solid-svg-icons";
import IconHeader from "components/reusable/IconHeader";
import Labels from "components/reusable/Labels";
import { useTranslation } from "react-i18next";
import { Container, Divider, Header, Image } from "semantic-ui-react";

import cleanCodeCover from "assets/images/books/clean_code_cover.png";
import driveCover from "assets/images/books/drive_cover.png";
import theSoftwareCraftsmanCover from "assets/images/books/the_software_craftsman_cover.png";

const Favourites = (): JSX.Element => {
  const { t } = useTranslation("favourites");
  return (
    <Container data-testid="favourites">
      <IconHeader icon={faHeart} text={t("header")} />

      <Books />
      <Divider hidden />

      <Practices />
    </Container>
  );
};

export default Favourites;

const Books = (): JSX.Element => {
  const { t } = useTranslation("favourites");

  // TODO: refactor
  const books: BookProps[] = [
    {
      title: "The Software Craftsman",
      imageSrc: theSoftwareCraftsmanCover,
      href: "https://www.oreilly.com/library/view/the-software-craftsman/9780134052625/",
    },
    {
      title: "Drive",
      imageSrc: driveCover,
      href: "https://www.danpink.com/books/drive/",
    },
    {
      title: "Clean Code",
      imageSrc: cleanCodeCover,
      href: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/",
    },
  ];

  return (
    <Container data-testid="books">
      <Header sub icon="book" content={t("books")} />
      {books.map((book) => (
        <Book {...book} key={book.title} />
      ))}
    </Container>
  );
};

interface BookProps {
  title: string;
  imageSrc: string;
  href: string;
}

const Book = ({ imageSrc, href }: BookProps): JSX.Element => {
  return (
    <Image
      src={imageSrc}
      size="small"
      rounded
      spaced
      as="a"
      href={href}
      target="_blank"
    />
  );
};

interface PracticesType {
  header: string;
  list: string[];
}

const Practices = (): JSX.Element => {
  const { t } = useTranslation("favourites");
  const practices = t<any, PracticesType[]>("practices", {
    returnObjects: true,
  });
  return (
    <Container data-testid="practices">
      <Header sub icon="level up" content={practices.header} />
      <Labels labels={practices.list} />
    </Container>
  );
};
