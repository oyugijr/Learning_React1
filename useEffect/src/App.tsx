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
  const [fetchedData, setFetchedData] = useState<TUser[] | null>([])
  const [reset, setReset] = useState<boolean>(false);

  //useEffect that will fetch data from the API
  const getUsers = async () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err))
  }

  const getUser = async (id: number) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setFetchedData([res.data]))
      .catch((err) => console.log(err))
  }

  // const sendUser = async () => {
  //   axios.post('https://jsonplaceholder.typicode.com/users', {
  //     name: 'Leanne Graham',
  //     username: 'Bret',
  //     email: 'name@ggdasd.com',
  //   })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err))
  // }

  useEffect(() => {
    getUsers()
  }, [reset]);

  //handle submit function
  const handleSubmit = (e :any) => {
    e.preventDefault()
    const id = e.target.id.value;
    if (Number(id)) {
      getUser(id);
      // reset the form
      e.target.reset();
    } else {
      alert('Please enter a valid id of type number')
    }
  }



  // console.log(fetchedData)
  return (
    <>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input type="text" name='id' />
          <button type='submit'>Search</button>
          <button type='button' onClick={() => setReset(!reset)}>Reset</button>
        </form>
      </div>
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
//*************************************** */ USING USE EFFECT*********************************************************************/// 
  // function App() {
  //   const [fetchedData, setFetchedData] = useState([])
  
  //   useEffect(() => {
  //     // Fetch data from an API
  //     // callback effects that helps us make requests to an API
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(response => response.json())
  //       .then(data => setFetchedData(data))
  //       .then(data => {
  //         console.log(data)
  //       })
  //       .catch(error => {
  //         // Handle any errors that occur during the fetch
  //         console.error(error)
  //       })
  //       console.log(fetchedData)
  //   }, [])
  
  //   return (
  //     <>
  //       {
  //         fetchedData ? <div>{fetchedData.map((data: any) => <p key={data.id}>{data.name}</p>)}</div> : <p>Loading...</p>
  //       }
  //     </>
  //   )
  // }

export default App
  