import React from 'react';
import Image from 'next/image';
import Styles from "@/styles/RightSideFirs.module.css"

const Table = () => {
  const data = [
    { img: '/ramka.png', name: 'Italiano pizza with garlic', age: '$108', city: '$50.8', qty: '5x' },
    { img: '/ramka.png', name: 'Italiano pizza with garlic', age: '$5.79', city: '$20.8', qty: '4x' },
    { img: '/ramka.png', name: 'Italiano pizza with garlic', age: '$16.40', city: '$48.4', qty: '3x' },
  ];

  return (
    <div className={Styles['table-container']}>
      <table className={Styles['styled-table']}>
        <thead className={Styles['mleft']}>
          <tr>
            <th>Items</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className={Styles['padding']} key={index}> {/* Using index as key */}
              <td>
                <Image className={Styles['img_ramka']} src={row.img} width={30} height={30} alt='item'/>
              </td>
              <td className={Styles['width']}>{row.name}
                <Image className={Styles['stars']} src={'/star.png'} width={10} height={10} alt='star'/>
                <Image src={'/star.png'} width={10} height={10} alt='star'/>
                <Image src={'/star.png'} width={10} height={10} alt='star'/>
                <Image className={Styles['black']} src={'/starblack.png'} width={10} height={10} alt='star'/>
              </td>
              <td>{row.qty}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
