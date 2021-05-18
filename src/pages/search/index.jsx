import React, { useEffect, useContext, useState } from 'react';
import InfoContext from '../../Context';
import InfoPiece from '../../components/infoPiece'

let data;

const Search = () => {

    const {info, setInfo} = useContext(InfoContext);

    const [name, setName] = useState('');

    async function fetchInfo() {  
        await fetch(`https://pt.openfoodfacts.org/categories?json=true`)
        .then(response => response.json())
        .then(data => {
          setInfo(data);
        });
      }

    const updateName = e => {
        setName(e.target.value);
    }

    useEffect(() => {
        data = info.tags?.slice(0, 20);

        console.log(typeof(name));
    }); 

    useEffect(() => {
        fetchInfo();
    },[]); 

    return (
        <>
        <form>
          <label>
            Nome do produto:  
            <input type="text" name="name" value={name} onChange={updateName} />
          </label>  
        </form>

        {data?.filter(pieceInfo => pieceInfo.name.includes(name)).map((pieceInfo, index) => (
        <InfoPiece key={index.toString()} name={pieceInfo.name} products={pieceInfo.products} />))}  
        </>
    );
}

export default Search;