import { render, screen } from "@testing-library/react"
import ResultItem from "./index"

describe('ResultItem', () => {
    const mockData = {
        cep: '12345-678',
        logradouro: 'Rua Teste',
        bairro: 'Centro',
        localidade: 'Florianópolis',
        uf: 'SC'
    }

    test('renderiza dados do endereço', () => {
        render(<ResultItem data={mockData} />)

        expect(screen.getByText(/Rua Teste/i)).toBeInTheDocument()
        expect(screen.getByText(/Centro/i)).toBeInTheDocument()
        expect(screen.getByText(/Florianópolis/i)).toBeInTheDocument()
    })
})