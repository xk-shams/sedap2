import React from 'react'
import Styles from "@/styles/OrderDetail.module.css"
import PageTitle from '@/components/common/PageTitle'
import Image from 'next/image'
import LeftSideFirst from '@/components/LeftSideFirst'
import LeftSideSecond from '@/components/LeftSideSecond'
import RightSideFirt from '@/components/RightSideFirt'
import RightSideSecond from '@/components/RightSideSecond'

function OrderDetail() {
  return (
    <>
    <div className={Styles['df_big']}>
       <div className={Styles['all1']}>
        <div>
        </div>
        <div>
          <h1>Order ID #5552351</h1>
          <div className={Styles['small_df']}>
            <p className={Styles['color_green']}>Orders /</p> 
            <p>Order Details</p>
          </div>
          <div className={Styles['dfg']}>
            <button className={Styles['style_btn']}> Cancel Order</button>
            <div className={Styles['df']}> 
              <form>
                <label htmlFor="select"></label>
                <select id="subjects" className={Styles['style_select']} name="subjects">
                  <option value="mathematics">On Delivery</option>
                  <option value="physics">undefined</option>
                  <option value="biology">undefined</option>
                  <option value="chemistry">undefined</option>
                  <option value="history">undefined</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
        <div>
        <LeftSideFirst/>
        <LeftSideSecond/>
        <div>
        <RightSideFirt/>
        <RightSideSecond/>
        </div>
        </div>

    </div>
    </>
  )
}

export default OrderDetail