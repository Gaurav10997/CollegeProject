import React from 'react'

function Error() {

const Res = `/myInput.java:3: error: '{' expected
public class myInput
                    ^
/myInput.java:4: error: class, interface, enum, or record expected
public static void main(String[] args) {
              ^
/myInput.java:6: error: class, interface, enum, or record expected
}
^
3 errors`

  return (
    <>
     <div className="Error">
        <h1 className='Error-heading' >Compilation Error</h1>
        <pre className='pre__error' >
            {Res}
        </pre>
    </div>
    </>
   
  )
}

export default Error