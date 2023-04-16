import React from 'react'

function Error({output}) {



  return (
    <>
     <div className="Error">
        <h1 className='Error-heading' >Compilation Error</h1>
        <pre className='pre__error' >
            {output}
        </pre>
    </div>
    </>
   
  )
}

export default Error