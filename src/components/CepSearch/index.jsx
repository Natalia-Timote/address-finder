import './CepSearch.style.css';

export default function CepSearch({ cep, setCep, handleSearchCep, adress, error, loading }) {
    return (
        <section className='cep'>
            <h2>Buscar endereço via CEP</h2>
            <input type="text" placeholder='Insira o CEP' value={cep} onBlur={handleSearchCep} onChange={(e) => setCep(e.target.value)} />
            <button className='button-search' onClick={handleSearchCep}>Buscar</button>

            <div className='results'>
                {adress && (
                    <div className='result'>
                        <p>Endereço: {adress.logradouro}</p>
                        <p>Bairro: {adress.bairro}</p>
                        <p>Cidade: {adress.localidade}</p>
                        <p>Estado: {adress.uf}</p>
                    </div>
                )}
            </div>

            {error && <p className='error'>{error}</p>}
            {loading && <p>Carregando...</p>}
        </section>
    )
}
