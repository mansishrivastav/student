import { createContext, useContext, useState } from "react"


const AppContext = createContext();


export const AppContextProvider = ({children}) => {
  const[data, setData] = useState([])

  const addData=(newData)=>{
    const id = Date.now()
    setData([...data,{...newData, id}])
  }
  
  return (
    <AppContext.Provider value={{data, addData, setData}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContextValue = ()=> useContext(AppContext)
