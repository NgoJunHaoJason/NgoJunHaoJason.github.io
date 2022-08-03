import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Divider,
  Header,
  Image,
  Label,
} from 'semantic-ui-react';
import IconHeader from 'utils/IconHeader';

const Favourites = (): JSX.Element => {
  const { t } = useTranslation('favourites');
  return (
    <Container data-testid='favourites'>
      <IconHeader icon={faHeart} text={t('header')} />

      <Books />
      <Divider hidden />

      <Practices />
    </Container>
  );
};

export default Favourites;

const Books = (): JSX.Element => {
  const { t } = useTranslation('favourites');

  const books: BookProps[] = [
    {
    title: 'Clean Code',
    imagePath: './books/clean_code_cover.png',
    href: 'https://www.oreilly.com/library/view/clean-code-a/9780136083238/',
    },
    {
    title: 'The Software Craftsman',
    imagePath: './books/the_software_craftsman_cover.png',
    href: 'https://www.oreilly.com/library/view/the-software-craftsman/9780134052625/',
    },
  ];

  return (
    <Container data-testid='books'>
      <Header sub icon='book' content={t('books')} />
      {books.map(book => Book(book))}
    </Container>
  );
};

interface BookProps {
  title: string,
  imagePath: string,
  href: string
};

const Book = ({
  imagePath,
  href,
}: BookProps): JSX.Element => {
  return (
    <Image
      src={imagePath}
      size='small'
      rounded
      spaced
      as='a'
      href={href}
      target='_blank'
    />
  );
};

const Practices = (): JSX.Element => {
  const { t } = useTranslation('favourites');

  const practices: string[] = [
    'code review',
    'pair programming',
    'refactoring',
    'test-driven development (TDD)',
    'continuous integration and continuous delivery (CI/CD)',
  ];

  return (
    <Container data-testid='practices'>
      <Header sub icon='level up' content={t('practices')} />
      <Label.Group>
        {practices.map(practice => <Label content={practice} />)}
      </Label.Group>
    </Container>
  )
};
