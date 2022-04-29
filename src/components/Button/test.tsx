import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Button
        href="href"
        text="Button"
        color="blue"
        size="medium"
      />,
    );

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
