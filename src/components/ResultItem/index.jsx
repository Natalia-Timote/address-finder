import CopyField from '../CopyField';
import './ResultItem.style.css';

export default function ResultItem({ data }) {
    return (
        <>
            <CopyField label="CEP" value={data.cep} />
            <CopyField label="Endereço" value={data.logradouro} />
            <CopyField label="Bairro" value={data.bairro} />
            <CopyField label="Cidade" value={data.localidade} />
            <CopyField label="Estado" value={data.uf} />
        </>
    )
}
