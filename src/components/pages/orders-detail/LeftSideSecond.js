import React from 'react'
import Image from 'next/image'
import Styles from "@/styles/LeftSideSecond.module.css"

function LeftSideSecond() {
  return (
    <div className={Styles['all']}>
    <div className={Styles['all_border']}>
        <p className={Styles['history']}>History</p>
        <div className={Styles['df-df']}>
        <Image className={Styles['dot_mtop']} src={'/dot.png'} width={10} height={10} alt='dot'/>
        <p>Order Delivered</p>
        </div>
        <div className={Styles['df-df']}>
        <Image className={Styles['dot_mtop']} src={'/dot (2).png'} width={10} height={10} alt='doet'/>
        <div>
        <p>On Delivery</p>
        <p className={Styles['size_text']}>Sat, 23 Jul 2020, 01:24 PM</p>
        </div>
        </div>
        <div className={Styles['df-df']}>
        <Image className={Styles['dot_mtop']} src={'/dot (2).png'} width={10} height={10} alt='doet'/>
        <div>
        <p>Payment Success</p>
        <p className={Styles['size_text']}>Sat, 23 Jul 2020, 01:24 PM</p>
        </div>
        </div>
        <div className={Styles['df-df']}>
        <Image className={Styles['dot_mtop']} src={'/dot (2).png'} width={10} height={10} alt='doet'/>
        <div>
        <p>Order Created</p>
        <p className={Styles['size_text']}>Sat, 23 Jul 2020, 01:24 PM</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default LeftSideSecond