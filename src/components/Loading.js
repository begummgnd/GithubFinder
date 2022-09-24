import React from 'react'
import loading from '../loading.gif'
const Loading = () => {
  return (
    <div>
        <img src={loading} alt="Loading" style={{width:"200px", display:"block", margin:"auto"}} />
    </div>
  )
}
export default Loading;