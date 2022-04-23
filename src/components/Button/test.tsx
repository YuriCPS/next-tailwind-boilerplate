import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = render(<Button href="href" title="title" />)

    expect(screen.getByRole('button', { name: /title/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
