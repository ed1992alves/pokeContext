import React, { useEffect, useContext } from 'react'
import InfoContext from '../../../Context'
import CategoryInfoPiece from '../../../components/categoryInfoPiece'

const Categories = (id) => {
  const { info, setInfo } = useContext(InfoContext)

  async function fetchInfo() {
    const category = Object.values(id)[0]
    await fetch(`https://pt.openfoodfacts.org/categoria/${category}?json=true`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setInfo(data)
      })
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <>
      <h3>Top 20 Categorias de Produtos</h3>
      {Object.values(info.products != null ? info.products : [])
        .slice(0, 20)
        .map((pieceInfo, index) => (
          <CategoryInfoPiece
            key={index.toString()}
            product_name={pieceInfo.product_name}
            product_quantity={pieceInfo.product_quantity}
          />
        ))}
    </>
  )
}

export default Categories
