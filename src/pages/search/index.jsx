import React, { useEffect, useContext, useState } from 'react'
import InfoContext from '../../Context'
import InfoPiece from '../../components/infoPiece'

const Search = () => {
  const { info, setInfo } = useContext(InfoContext)

  const [name, setName] = useState('')

  const [data, setData] = useState([])

  const updateName = (e) => {
    setName(e.target.value)
  }

  async function fetchInfo() {
    await fetch(`https://pt.openfoodfacts.org/categories?json=true`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data)
      })
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  useEffect(() => {
    if (name != null && name !== '') {
      setData(info.tags?.slice(0, 20))
    } else {
      setData([])
    }
  }, [name])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do produto:
          <input type="text" name="name" value={name} onChange={updateName} />
        </label>
      </form>

      {console.log(JSON.stringify(data))}
      {data
        ?.filter((pieceInfo) => pieceInfo.name.includes(name))
        .map((pieceInfo, index) => (
          <InfoPiece
            key={index.toString()}
            name={pieceInfo.name}
            products={pieceInfo.products}
          />
        ))}
    </>
  )
}

export default Search
