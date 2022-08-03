import { render, screen, within } from '@testing-library/react';
import GitHubCorner, {
  GitHubCornerPicture
} from 'utils/GitHubCorner';

describe('GitHubCorner', () => {
  it('renders GitHubCornerPicture in GitHubCorner', () => {
    render(<GitHubCorner />);

    expect(
      within(screen.getByTestId('github-corner'))
        .getByTestId('github-corner-picture'))
      .toBeInTheDocument();
  });

  it('renders components in GitHubCornerPicture', () => {
    render(<GitHubCornerPicture />);

    const githubCornerPicture = screen.getByTestId('github-corner-picture');

    expect(
      within(githubCornerPicture)
        .getByTestId('outline'))
      .toBeInTheDocument();

    expect(
      within(githubCornerPicture)
        .getByTestId('octocat-arm'))
      .toBeInTheDocument();

    expect(
      within(githubCornerPicture)
        .getByTestId('octocat-body'))
      .toBeInTheDocument();
  });
});
