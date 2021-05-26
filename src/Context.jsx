import React, { useState } from 'react'

const InfoContext = React.createContext()
export const InfoProvider = (props) => {
  const { children } = props

  const [info, setInfo] = useState([])

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  )
}

export default InfoContext
