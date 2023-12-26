import React from 'react'
import Cars from './Cars';

const Distructuring = () => {

   const [tesla,honda]=Cars;


   const {color:[teslacolor,teslacolorred]}=tesla;
   const {color:[hondacolor,hondacorred]}=honda




   const {poplarity:{topspeed:teslatopspeed}}=tesla;
   const {poplarity:{topspeed:hondatopspeed}}=honda;




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
                <th>{tesla.teslacolor}</th>
                <th>{tesla.teslatopspeed}</th>
                
            </tr>
            <tr>
                <th>{honda.brand}</th>
                <th>{honda.hondacolor}</th>
                <th>T{honda.hondatopspeed}</th>
                
            </tr>
        </table> 
    </div>
  )
}

export default Distructuring