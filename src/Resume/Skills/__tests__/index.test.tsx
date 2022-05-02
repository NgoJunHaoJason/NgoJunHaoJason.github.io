import { render, screen, within } from '@testing-library/react';
import {
  Technology,
  mapTechToDevIconName,
} from 'Resume/Skills';

describe('Skills', () => {
  it('renders technology name', () => {
    render(<Technology name='name' />);
    expect(within(screen.getByTestId('technology')).getByText('name')).toBeInTheDocument();
  });

  it('maps technology name to DevIcon name correctly', () => {
      expect(mapTechToDevIconName('C#')).toBe('csharp');
      expect(mapTechToDevIconName('CSS')).toBe('css3');
      expect(mapTechToDevIconName('HTML')).toBe('html5');
      expect(mapTechToDevIconName('DefaultName')).toBe('defaultname');
  })
});
