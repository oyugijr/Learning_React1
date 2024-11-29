import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
//*************************************** */ USING AXIOS*********************************************************************/// 
interface TUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}
function App() {
  const [fetchedData, setFetchedData] = useState<TUser[] | null>([]);

  //useEffect that will fetch data from the API
  const getUsers = async () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getUsers()
  }, []);


  // console.log(fetchedData)
  return (
    <>
      <div className='users'>
        {
          fetchedData ? (
            fetchedData.map((user: TUser) => {
              return (
                <div className='user' key={user.id}>
                  <p>Name: {user.name}</p>
                  <p>userName: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p>Address: {user.address.street}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Website: {user.website}</p>
                  <p>Company: {user.company.name}</p>
                </div>
              )
            })
          ) : (
            <div> 💀no data</div >
          )
        }

      </div>
    </>
  )
}

export default App;