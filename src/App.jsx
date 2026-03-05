import { useState } from 'react'
import './App.css'
import SearchSelector from './components/SearchSelector';
import CepSearch from './components/CepSearch';
import LogradouroSearch from './components/LogradouroSearch';
import { getCep, getLogradouro } from './services/viacep.service';

function App() {
  const [screen, setScreen] = useState('cep');

  const [cep, setCep] = useState('');
  const [adress, setAdress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [logradouro, setLogradouro] = useState('');
  const [results, setResults] = useState([]);
  const [selectedCep, setSelectedCep] = useState(null);

  function chooseScreen(type) {
    setScreen(type);
    setCep('');
    setAdress(null);
    setLoading(false);
    setError('');
    setLogradouro('');
    setResults([]);
    setSelectedCep(null);
  }

  async function handleSearchCep() {
    setLoading(true);

    if (!/^\d{8}$/.test(cep)) {
      setAdress(null);
      setLoading(false);
      setError('O CEP precisa conter 8 dígitos. Tente novamente!');
      return;
    }

    try {
      const data = await getCep(cep);

      setAdress(data);
      setError('');
    } catch (error) {
      setError(error.message);
      setAdress(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearchLogradouro() {
    setLoading(true);
    setSelectedCep(null);

    if (logradouro.trim().length < 3) {
      setError('Digite pelo menos 3 caracteres.');
      setLoading(false);
      return;
    }

    try {
      const data = await getLogradouro(
        'SC',
        'Florianopolis',
        logradouro
      )

      setResults(data);
      setError('');
    } catch (error) {
      setError(error.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <SearchSelector onChangeScreen={chooseScreen} />

      {screen === 'cep' &&
        <CepSearch
          cep={cep}
          setCep={setCep}
          handleSearchCep={handleSearchCep}
          adress={adress}
          error={error}
          setError={setError}
          loading={loading}
        />
      }

      {screen === 'logradouro' &&
        <LogradouroSearch
          logradouro={logradouro}
          setLogradouro={setLogradouro}
          handleSearchLogradouro={handleSearchLogradouro}
          results={results}
          selectedCep={selectedCep}
          setSelectedCep={setSelectedCep}
          error={error}
          setError={setError}
          loading={loading}
        />
      }
    </main>
  )
}

export default App
