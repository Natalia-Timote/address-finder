import Button from '../Button';
import Card from '../Card';
import Input from '../Input';
import ResultItem from '../ResultItem';
import './CepSearch.style.css';

export default function CepSearch({ cep, setCep, handleSearchCep, address, error, setError, loading }) {
    return (
        <section className='cep'>
            <h2>Buscar endereço via CEP</h2>
            <form className='form-cep' onSubmit={(e) => {
                e.preventDefault();
                handleSearchCep();
            }}>
                <Input
                    type='text'
                    placeholder='Insira o CEP'
                    value={cep}
                    maxLength={9}
                    onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '');

                        if (value.length > 5) {
                            value = value.slice(0, 5) + '-' + value.slice(5, 8);
                        }

                        setCep(value);
                        setError('');
                    }}
                />
                <Button className='button-search' type='submit' disabled={loading}>Buscar</Button>
            </form>

            <div className='results-container'>
                {address && (
                    <Card className='card-selected'>
                        <ResultItem data={address} />
                    </Card>
                )}
            </div>

            {error && <p className='error'>{error}</p>}
            {loading &&  <div className="spinner"></div>}
        </section>
    )
}
