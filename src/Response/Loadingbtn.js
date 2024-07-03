import React,{usestate} from 'react'

import  Loader  from 'react-loader-spinner'
const Loadingbtn = () => {
const[loader,setLoader]=usestate(false)
//    const loader=()=>{
//      <Audio
//     height="80"
//     width="80"
//     radius="9"
//     color="green"
//     ariaLabel="loading"
//     wrapperStyle
//     wrapperClass
//   />} 
   
      
  return (
    <div>
      <button onClick={()=>{
        setLoader(true)
      }} >Submit</button>

      <Loader show={loader} type="box" message="Loading Data" />
    </div>

  )
}

export default Loadingbtn
