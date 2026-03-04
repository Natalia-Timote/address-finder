import Button from '../Button';
import './SearchSelector.style.css';

export default function SearchSelector({ onChangeScreen }) {
    return (
        <section className='search-selector'>
            <img className='adress-logo' src="./adress.png" alt="" />
            <h1>Adress Finder</h1>
            <Button onClick={() => onChangeScreen('cep')}>Buscar com CEP</Button>
            <Button onClick={() => onChangeScreen('logradouro')}>Buscar com logradouro</Button>
        </section>
    )
}
