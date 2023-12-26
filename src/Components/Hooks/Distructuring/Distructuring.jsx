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
                <th>Top color</th>
                <th>Top speed</th>
            </tr>
            <tr>
                <th>{tesla.brand}</th>
                <th>{teslacolor}</th>
                <th>{teslatopspeed}</th>
                
            </tr>
            <tr>
                <th>{honda.brand}</th>
                <th>{hondacolor}</th>
                <th>{hondatopspeed}</th>
                
            </tr>
        </table> 
    </div>
  )
}

export default Distructuring