const FetchYearbyData =(year,launch,land)=>{
    return (dispatch)=>{
        fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`)
        .then(res => res.json())
        .then(res => {
             console.log(res,'action')
             dispatch({type:"GET_DATA",payload:res})
        })
        .catch(err => console.log(err))
    }
}
export default FetchYearbyData