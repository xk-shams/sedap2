import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Styles from '@/styles/RightSideSecond.module.css'

function RightSideSecond() {
  return (
    <>
    <div className={Styles['borderline']}>
        <div>
        <Image className={Styles['mright']} src={'/map.png'} width={760} height={380} alt='map'/>
        </div>
        <p className={Styles['font-size']}>Delivery by</p>
        <div className={Styles['df']}>
        <Image src={'/round-gray.png'} width={60} height={60} alt='grayround'/>
        <div className={Styles['mtoptxt']}>
        <p>Kevin Hobs Jr.</p>
        <p>ID - 412455</p>
        </div>
        <div className={Styles['df22']}>
            <Image className={Styles['mleft_img']} src={'/Group 210.png'} width={40} height={40} alt='group'/>
            <div className={Styles['mleft']}>            <Link href={'https://github.com/'}>Telepon</Link>
            <p>+12 345 5662 66</p>
            </div>
        </div>
        <div className={Styles['df12']}>
            <Image className={Styles['mleft_img']} src={'/car.png'} width={40} height={40} alt='group'/>
            <div className={Styles['mleft']}>            <p>Delivery Time</p>
            <p>12:52</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default RightSideSecond