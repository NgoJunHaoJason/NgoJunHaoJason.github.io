import { render, screen, within } from '@testing-library/react';
import Skills, {
  Technology,
  mapTechToDevIconName,
} from 'Resume/Skills';

describe('Skills', () => {
  it('renders Technologies within Skills', () => {
    render(<Skills />);

    expect(within(screen.getByTestId('skills'))
      .getByTestId('technologies'))
      .toBeInTheDocument();
  });

  it('renders name within Technology', () => {
    render(<Technology name='name' />);

    expect(within(screen.getByTestId('technology'))
      .getByText('name'))
      .toBeInTheDocument();
  });

  it('maps technology name to DevIcon name correctly', () => {
    expect(mapTechToDevIconName('C#')).toBe('csharp');
    expect(mapTechToDevIconName('CSS')).toBe('css3');
    expect(mapTechToDevIconName('HTML')).toBe('html5');
    expect(mapTechToDevIconName('DefaultName')).toBe('defaultname');
  })
});
