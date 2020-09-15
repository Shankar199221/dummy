import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import IntialFetchActon from '../../Actions/IntialFetchActon'
import Card from '../Card/Card'
import './Home.css'

function Home() {
//Get data from store using this useselectors .
    const Data =useSelector(state => state.reducerData.Data)
    const dispatch = useDispatch()
//call getdata function using useDispatch method
     const getData = ()=> dispatch(IntialFetchActon())

     console.log(Data,"home")
//Fecting data from redux using api call
     useEffect(()=>{
       getData()
    },[])
     
   
    return (
        <div className="wrapper" >
            {Data ? (
                Data?.map((data)=>{
                    return <Card key={data.flight_number} item={data}/>
                })
            ): (<h1>Loading....</h1>)}
           
            
        </div>
    )
}

export default Home
