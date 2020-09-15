/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import FetchYearbyData from '../../Actions/FetchYearbyData';
import LandingActions from '../../Actions/LandingActions';
import LaunchingActions from '../../Actions/LaunchingActions';
import './Filter.css'


function Filter() {
      
    const initialState =[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
    
// initialize the values using useState
    const [year,setYear] = useState('');
    const [launch,setLaunch] = useState('');
    const [land,setLand] = useState('');

// using useSelotors and useDispach to get data and call action in redux
    const Data =useSelector(state => state.reducerData.Data)
    const dispatch = useDispatch()
     const getData = (year,launch,land)=> dispatch(FetchYearbyData(year,launch,land))
     const getLand = (value)=> dispatch(LandingActions(value))
     const getLaunch = (value)=> dispatch(LaunchingActions(value))

     console.log(Data,"Filter")
//runnng this useEffect dependencies
     useEffect(()=>{
          getData(year,launch,land)

     },[year, launch, land])
     
//update the year value from this method
    const handleGetYear =(value) =>{
      console.log('clicled',value.year)
      setYear(value.year)
//update the launch value from this method
    }
     const handleLanch =(value) =>{
        setLaunch(value) 
        getLand(value)
      
      }
//update the land value from this method
      const handleLanding =(value) =>{
        setLand(value) 
        getLaunch(value)
     
      }
   

    return (
        <>
            <h4>Filters</h4>
            <div className="launchers">Launch Year</div>
             <div className="yearswrapper">
             {initialState?.map((year => {
                return  (
                 <div key={year} onClick={()=>handleGetYear({year})} className="yearspan" >{year}</div> 
                )
            })) }
             </div>
            <div className="launchers">SuccessfulLaunch</div>
                <span onClick={()=>handleLanch("true")} className="span">True</span>
                <span onClick={()=>handleLanch("false")} className="span">False</span>
            <div className="launchers">SuccessfulLanding</div>
                <span onClick={()=>handleLanding("true")} className="span">True</span>
                <span onClick={()=>handleLanding("false")} className="span">False</span>
        </>
    )
}

export default Filter
