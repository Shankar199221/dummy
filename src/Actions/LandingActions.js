const LandingActions =(value)=>{
    return (dispatch)=>{
        fetch(`https://api.spacexdata.com/v3/launches?limit=100&land_success=true${value}`)
        .then(res => res.json())
        .then(res => {
            //  console.log(res,'action')
             dispatch({type:"GET_DATA",payload:res})
        })
        .catch(err => console.log(err))
    }
}
export default LandingActions