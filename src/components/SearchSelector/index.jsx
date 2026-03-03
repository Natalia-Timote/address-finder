import './SearchSelector.style.css';

export default function SearchSelector({ onChangeScreen }) {
    return (
        <section className='search-selector'>
            <h1>Adress Finder</h1>
            <button onClick={() => onChangeScreen('cep')}>Buscar com CEP</button>
            <button onClick={() => onChangeScreen('logradouro')}>Buscar com logradouro</button>
        </section>
    )
}
