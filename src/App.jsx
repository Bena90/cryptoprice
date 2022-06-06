import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import mainImg from './assets/imagen-criptos.png'
import mainImg2 from './assets/imagen-criptos2.png'
import Form from './components/form'
import NavBar from './components/NavBar'
import Result from './components/Result'
import Spinner from './components/Spinner'

const Heading = styled.h1`
  color: #FFF;
  text-align: center;
  font-weight: 400;
  margin-top: 80px;
  margin-bottom: 50 px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Contenedor = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

function App() {
  const [ coinSelect, setCoinSelect ] = useState({});
  const [ result, setResult ] = useState({})
  const [ loading, setLoading ] = useState(false)

  const {cryptoCurrency, currency} = coinSelect;
  const urlData = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`


  useEffect(() => {

    if (Object.keys(coinSelect).length > 0){
      setLoading(true)
      const getApi = async () => {
            
        try {
            const response = await fetch (urlData)
            const result = await response.json()
            setResult(result.DISPLAY[cryptoCurrency][currency])
            setLoading (false)
      } catch (err) {
        console.log(err)          
      }        
    }
    getApi();
    
    }
  }, [coinSelect])

  return (
    <>
      <NavBar />
      <Contenedor>
        <Image 
          src={mainImg}
          alt='main'
          />
        <div>
          <Heading> Cotizador de Criptomonedas </Heading>
          <Form
            setCoinSelect={setCoinSelect}
            />
          { loading ? 
          (
            <Spinner/>
            ) : (
              (result.FROMSYMBOL) && <Result result={result}/>
              )
            }
        </div>
      </Contenedor>

    </>
  )
}

export default App
