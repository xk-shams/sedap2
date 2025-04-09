import React from 'react'
import Styles from "@/styles/LeftSideFirst.module.css"
import PageTitle from '@/components/common/PageTitle'
import Image from 'next/image'
import Link from 'next/link'

function LeftSideFirst() {
  return (
    <>
      <div className={Styles['all']}>
        <div>
          <PageTitle />
        </div>
        <div className={Styles['border_all']}>
          <Image className={Styles['mtop_round']} src={'/placeholder (1).png'} width={100} height={100} alt='placeholder'/>
          <p>Wahyu Adi Kurniawan </p>
          <button className={Styles['btn_style']}><Link href={'https://www.instagram.com/bekhruzxon07/'}>Customer</Link></button>
          <div className={Styles['small_border']}>
            <h4>Note Order</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>     
          </div>
          <div className={Styles['little_border']}>
            <Image className={Styles['img']} src={'/shipping 1.png'} width={50} height={50} alt='shopcar'/>
            <p className={Styles['color_white']}>6 The Avenue, London EC50 4GN</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftSideFirst
