import Card from '../Card';
import ResultItem from '../ResultItem';
import './ResultList.style.css';

export default function ResultList({ results, selectedCep, setSelectedCep }) {
    return (
        <>
            {results.map((item) => {
                return(
                <Card className={`${selectedCep?.cep === item.cep ? 'selected' : ''}`} key={item.cep} onClick={() => setSelectedCep(item)}>
                    <ResultItem data={item} />
                </Card>
                )
            })}
        </>
    )
}
