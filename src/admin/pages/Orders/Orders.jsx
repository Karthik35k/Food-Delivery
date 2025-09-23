import React from 'react';
import './orders.css';

const Orders = () => {
  return (
    <section className='admin-section'>
      <div className='section-header'>
        <h2 className='section-title'>Orders</h2>
        <div className='section-actions'>
          <button className='btn ghost'>Export</button>
          <button className='btn'>New Order</button>
        </div>
      </div>
      <div className='table-wrap orders-table'>
        <table className='data'>
          <thead>
            <tr>
              <th>Order ID</th><th>Customer</th><th>Total</th><th>Payment</th><th>Status</th><th>ETA</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#784213</td><td>Rahul</td><td>₹230</td><td>UPI</td>
              <td><span className='status info'>On the way</span></td><td>25m</td>
              <td><button className='btn secondary'>Details</button></td>
            </tr>
            <tr>
              <td>#784214</td><td>Anita</td><td>₹140</td><td>Card</td>
              <td><span className='status warn'>Preparing</span></td><td>35m</td>
              <td><button className='btn secondary'>Details</button></td>
            </tr>
            <tr>
              <td>#784215</td><td>Vijay</td><td>₹190</td><td>COD</td>
              <td><span className='status success'>Delivered</span></td><td>-</td>
              <td><button className='btn secondary'>Details</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;


