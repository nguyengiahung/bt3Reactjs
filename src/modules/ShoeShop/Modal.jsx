import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const {spChiTiet} = this.props;
    const {description, shortDescription, quantity} = spChiTiet;
    return (
      <div className="row my-5">
          <div className="col-4">
            <h2>Sản Phẩm</h2>
            <img style={{width: "100%"}} src={spChiTiet.image} alt="" />
            <span>{spChiTiet.name}</span>
          </div>

          <div className="col-8">
            <h2 className='mb-5'>Thông Tin Sản Phẩm</h2>

            <table className='table text-left'>
            <tbody>
            <tr>
                <td>Mô tả</td>
                <td>{description}</td>
            </tr>
            <tr>
                <td>Mô tả ngắn</td>
                <td>{shortDescription}</td>
            </tr>
            <tr>
                <td>Số lượng</td>
                <td>{quantity}</td>
            </tr>
            </tbody>
            </table>
          </div>
        </div>
    )
  }
}
