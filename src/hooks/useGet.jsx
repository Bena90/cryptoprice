import { useState, useEffect } from 'react'

const useGet = (url) => {
    const [ state, setState ] = useState([]);

    useEffect (()=>{
        const getApi = async () => {
            
            try {
                const response = await fetch (url)
                const result = await response.json()
                const cryptoCurrencies = result.Data.map( crypto => {
                const cryptos = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return cryptos
                })
                setState(cryptoCurrencies)
          } catch (err) {
            console.log(err)          
          }        
        }
        getApi();
    },[])
  
    return [state]
}

export default useGet;