const LaunchingActions =(value)=>{
    return (dispatch)=>{
        fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${value}`)
        .then(res => res.json())
        .then(res => {
            //  console.log(res,'action')
             dispatch({type:"GET_DATA",payload:res})
        })
        .catch(err => console.log(err))
    }
}
export default LaunchingActions