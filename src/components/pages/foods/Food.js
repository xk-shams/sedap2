import React from 'react'
import Image from 'next/image'
import Styles from '@/styles/Food.module.css'

const foodItems = [
  {
    id: 1,
    name: 'Spicy Mozarella with Barbeque',
    image: '/food1.png',
    category: 'Noodle',
  },
  {
    id: 2,
    name: 'Chicken Alfredo Pasta',
    image: '/food1.png',
    category: 'Pasta',
  },
  {
    id: 3,
    name: 'Beef Burger with Fries',
    image: '/food1.png',
    category: 'Burger',
  },
  {
    id: 4,
    name: 'Vegan Salad Bowl',
    image: '/food1.png',
    category: 'Salad',
  },
  {
    id: 5,
    name: 'Grilled Salmon Steak',
    image: '/food1.png',
    category: 'Seafood',
  },
  {
    id: 6,
    name: 'Chicken Alfredo Pasta',
    image: '/food1.png',
    category: 'Pasta',
  },
  {
    id: 7,
    name: 'Chicken Alfredo Pasta',
    image: '/food1.png',
    category: 'Pasta',
  },
  {
    id: 8,
    name: 'Chicken Alfredo Pasta',
    image: '/food1.png',
    category: 'Pasta',
  },
  {
    id: 9,
    name: 'Chicken Alfredo Pasta',
    image: '/food1.png',
    category: 'Pasta',
  },
  {
    id: 10,
    name: 'Chicken Alfredo Pasta',
    image: '/food1.png',
    category: 'Pasta',
  },
]

function Food() {
  return (
    <>
      <div>
        <h1>Foods</h1>
        <p>Here is your menus summary with graph view</p>
<div className={Styles['all']}>
        {foodItems.map((item) => (
          <div key={item.id} className={Styles['border_line']}>
            <Image
              className={Styles['mleft']}
              src={item.image}
              width={200}
              height={200}
              alt='food'
            />
            <p className={Styles['p']}>{item.name}</p>
            <div className={Styles['p_df']}>
              <p className={Styles['green_p']}>Food /</p>
              <p> {item.category}</p>
            </div>
            <div className={Styles['df_big']}>
              <div>
                <Image
                  className={Styles['back_style']}
                  src={'/eye.png'}
                  width={30}
                  height={30}
                  alt='eye'
                />
                <p>View</p>
              </div>
              <div>
                <Image
                  className={Styles['back_style1']}
                  src={'/plus.png'}
                  width={30}
                  height={30}
                  alt='edit'
                />
                <p>Edit</p>
              </div>
              <div>
                <Image
                  className={Styles['back_style2']}
                  src={'/delete.png'}
                  width={30}
                  height={30}
                  alt='delete'
                />
                <p>Delete</p>
              </div>
              <div>
                <Image
                  className={Styles['back_style3']}
                  src={'/plus.png'}
                  width={30}
                  height={30}
                  alt='duplicate'
                />
                <p>Duplicate</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Food
