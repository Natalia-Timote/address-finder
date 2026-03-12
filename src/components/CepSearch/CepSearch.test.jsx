import { render, screen } from "@testing-library/react"
import CepSearch from "."

test('mostra input de CEP', () => {
    render(
        <CepSearch
            cep=''
            setCep={() => {}}
            handleSearchCep={() => {}}
            address={null}
            error=""
            setError={() => {}}
            loading={false}
        />
    )

    expect(screen.getByPlaceholderText(/insira o cep/i)).toBeInTheDocument()
})