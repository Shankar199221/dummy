import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import IntialFetchActon from '../../Actions/IntialFetchActon'
import Card from '../Card/Card'
import './Home.css'

function Home() {

    const Data =useSelector(state => state.reducerData.Data)
    const dispatch = useDispatch()
     const getData = ()=> dispatch(IntialFetchActon())

     console.log(Data,"home")

     useEffect(()=>{
       getData()
    },[])
     
   
    return (
        <div className="wrapper" >
            {Data ? (
                Data?.map((data)=>{
                    return <Card key={data.flight_number} item={data}/>
                })
            ): (<h2>No Data Available</h2>)}
           
        </div>
    )
}

export default Home
