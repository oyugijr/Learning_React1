import { useState, createContext, } from "react";
import Navbar from "../components/Navbar"
import Table from "../components/Table"
import UserReg from "../components/UserReg"

export const refreshContext = createContext({refresh: false, setRefresh: (refresh:boolean) => {}});
const Home = () => {
  const [refresh, setRefresh] = useState<boolean>(false);
  return (
    <refreshContext.Provider value={{refresh,setRefresh}}>
    <div className="grid grid-col-1 place-items-center gap-6">
      <Navbar />
      <UserReg  />
      <Table />
    </div>
    </refreshContext.Provider>
  )
}

export default Home