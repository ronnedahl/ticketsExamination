import React from 'react'

function RenderEvents({topevents}) {
 


//  })
    return (
    <div>
     {    topevents.map((eventen, index)=>{
  
  console.log(eventen.name)                  
     })
    }
     </div>
     
  )
}

export default RenderEvents
