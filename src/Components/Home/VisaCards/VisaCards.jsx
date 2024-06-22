import React from 'react'
import Visacards from './VisaCards.module.css'
import visa from '../../../images/visa.svg'
import master from '../../../images/master.svg'
import ideal from '../../../images/ideal.svg'
import coinbase from '../../../images/coinbase.svg'
import sofort from '../../../images/sofort.svg'
import skrill from '../../../images/skrill.svg'


function VisaCards() {
  return (
    <div>
      <div className={Visacards.VisaContainer}>
<img src={visa} alt="" />
<img src={master} alt="" />
<img src={coinbase} alt="" />
<img src={ideal} alt="" />
<img src={sofort} alt="" />
<img src={skrill} alt="" />
      </div>
    </div>
  )
}

export default VisaCards
