import { fireEvent, render, screen } from "@testing-library/react"
import Button from './index'

test('executa onClick quando clicado', () => {
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Buscar</Button>)

    const button = screen.getByText('Buscar')

    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
})