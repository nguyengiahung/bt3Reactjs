import React, { Component } from 'react'
import Modal from './Modal';

export default class ProductItem extends Component {
  render() {
    const {item, handleXemChiTiet} = this.props;
    return (
      <div className='card p-4 mb-4 text-left' style={{border: '1px solid gray'}}>
        <img style={{width: '100%'}} src={item.image} alt="" />
        <h5>{item.name}</h5>
        <p>{item.price}</p>
        <div className="row justify-content-center">
        <button className='p-2 mr-3' style={{backgroundColor: 'black', color: 'white'}}>Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
        <button onClick={handleXemChiTiet} id="btn-view" className='p-2' style={{backgroundColor: 'black', color: 'white'}}>View <i className="fa-solid fa-eye"></i></button>
        </div>
      </div>
    )
  }
}
