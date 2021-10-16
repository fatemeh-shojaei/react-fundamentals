// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'


 const smallBox = (
  <Box
     size="small"
     className="box--small"
     style={{backgroundColor: 'lightblue'}}
  >
     small lightblue box
   </Box>
 )
 const mediumBox = (
   <Box
     size="medium"
     className="box--medium"
     style={{backgroundColor: 'pink'}}
   >
     medium pink box
   </Box>
 )
 const largeBox = (
   <Box
     size="large"
     className="box--large"
     style={{ backgroundColor: 'orange'}}
   >
     large orange box
   </Box>
 )

function Box({className='', size, style, ...otherProps}){
  const sizeClassName= size ? `box--${size}` : ''
  return <div className={`box ${className} ${sizeClassName}`} style={{fontStyle: 'italic', ...style}} {...otherProps} />
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
