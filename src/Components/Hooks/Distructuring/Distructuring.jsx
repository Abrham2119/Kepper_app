import React from 'react'
import Cars from './Cars';

const Distructuring = () => {

   const [tesla,honda]=Cars;
    


  return (
    <div>
        
         <table>
            <tr>
                <th>brand</th>
                <th>Top speed </th>
                <th>Top color</th>
            </tr>
            <tr>
                <th>{tesla.brand}</th>
                <th>{tesla.color}</th>
                <th>{tesla.poplarity}</th>
                
            </tr>
            <tr>
                <th>{tesla.brand}</th>
                <th>{honda.color}</th>
                <th>T{honda.oplarity}</th>
                
            </tr>
        </table> 
    </div>
  )
}

export default Distructuring