import React from 'react'
import './CountriesListShimmer.css';

function CountriesListShimmer() {

  // new Array(10).fill('')
  // console.log("hiiiiiiiiiiiiiiiiiii");
  return (
    <>
        <div className='countries-container'>
          {
            Array.from({length: 10}).map((el,i)=>{
              return <div key={i} className="country-card shimmer-card"></div>
            })
          }
        </div>
    </>
  )
}

export default CountriesListShimmer