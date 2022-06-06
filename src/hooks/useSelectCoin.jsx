import React, { useState } from 'react';
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-size: 24px;
    font-weight: 500;
    margin: 15px 0;

`
const Select = styled.select`
    width: 100%;
    display: block;
    font-size: 16px;
    padding: 12px;
    font-weight: 200;
    border-radius: 10px;
    margin-bottom: 20px;
`

const useSelectCoin = (label, coins) => {
    const [state, setstate] = useState('');

    const SelectCoin = () => (
        <>
            <Label> {label} </Label>
            <Select
                value={state}
                onChange={(e)=> setstate(e.target.value)}
            >
                <option value="">Seleccione</option>
                {
                    coins.map( coin =>(
                        <option
                            key={coin.id}
                            value={coin.id}
                        >
                            {coin.name} ({coin.id})
                        </option>
                    ))
                }
            </Select>
        </>
    )

    return [state, SelectCoin ]
}

export default useSelectCoin