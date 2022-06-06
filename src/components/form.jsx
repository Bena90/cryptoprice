import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import useSelectCoin from '../hooks/useSelectCoin'
import useGet from '../hooks/useGet'
import currencies from '../data/currencies';
import Error from './Error';


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 8px;
    transition: background-color .4s ease;
    margin-top: 20px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = ({setCoinSelect}) => {
    
    const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    const [ cryptoCurriencies ] = useGet(URL)
    const [ error, setError ] = useState('')

    const [currency, SelectCurrency] = useSelectCoin ('Elige tu Moneda', currencies);
    const [cryptoCurrency, SelectCryptoCurrency] = useSelectCoin ('Elige tu Cripto', cryptoCurriencies);

    const handleSubmit = (e) => {
      e.preventDefault();

      if ([currency, cryptoCurrency].includes('')) {
        setError('Todos los campos son obligatorios')
        return;
      }
      setError('')
      setCoinSelect({currency, cryptoCurrency})
    }

  return (
    <>
      {error && <Error>{error}</Error>}
      <form onSubmit={handleSubmit}>
          <SelectCurrency/>

          <SelectCryptoCurrency/>

          <InputSubmit
              type="submit"
              value='Cotizar' />
      </form>
    </>
  );
};

export default Form