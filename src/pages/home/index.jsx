import React, { useEffect, useContext } from 'react';
import InfoContext from '../../Context';
import InfoPiece from '../../components/infoPiece'

const Home = () => {

  const {info, setInfo} = useContext(InfoContext);

  async function fetchInfo() {  
    await fetch(`https://pt.openfoodfacts.org/categories?json=true`)
    .then(response => response.json())
    .then(data => {
      setInfo(data);
    });
  }

  useEffect(() => {
    fetchInfo();
  },[]); 

  useEffect(() => {
    const data = JSON.stringify(info);
    
    if (data != null && data.length > 0 && data !== '[]') {
      console.log(JSON.stringify(info));
    }
  },[info]);

  return (
      <>
      <h3>Top 20 Categorias de Produtos</h3>
      {info.tags?.slice(0, 20).map((pieceInfo, index) => (
        <InfoPiece key={index.toString()} name={pieceInfo.name} products={pieceInfo.products} />
      ))}
      </>
  )
}

export default Home;