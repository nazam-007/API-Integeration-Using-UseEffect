
import { useEffect, useState } from 'react'

export default function User(){

    const [userList,setUserList]=useState()
    const [pending,setPending]=useState(false)

    async  function fetchAllUsers(){
      try {
        setPending(true)
        const apiResponce=await fetch('https://dummyjson.com/users')
        const result=await apiResponce.json()
        console.log(result)

        
  
        if(result?.users){
          setUserList(result?.users)
          setPending(false)
        }
        else{
          setUserList([])
          setPending(false)
        }
      } catch (error) {
        console.log(error)
        
      }
    }
  
  
  
    // useEffect(()=>{
    //   fetchAllUsers()
    // },[])

    function HandleFetchListOfUser(){
        fetchAllUsers()
    }

    if(pending){
        <h2>please wait!! we are fetching data</h2>
    }
    
    console.log(userList)
    return <div>
        <p>All User List</p>
        <button onClick={HandleFetchListOfUser}> fetch All Data</button>
        <ul>
            {
                userList && userList.length >0 ?
                userList.map(userItem=> <li key={userItem?.id}> <p>{userItem?.firstName}{userItem?.lastName}</p></li>) : <h1>Data not found</h1>
            }
        </ul>
    </div>
}