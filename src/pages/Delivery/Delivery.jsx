import React, { useMemo } from 'react';
import './Delivery.css';

const Delivery = () => {
  const tracking = useMemo(() => ({
    orderId: 'ORD-784213',
    eta: '28-35 min',
    stages: [
      { key: 'placed', label: 'Order Placed', time: '2:05 PM', done: true },
      { key: 'preparing', label: 'Preparing', time: '2:10 PM', done: true },
      { key: 'picked', label: 'Picked Up', time: '2:28 PM', done: true },
      { key: 'enroute', label: 'On the Way', time: '—', done: true },
      { key: 'delivered', label: 'Delivered', time: '—', done: false }
    ],
    rider: {
      name: 'Rahul Kumar',
      phone: '+91 98765 43210',
      vehicle: 'AP 07 CD 1234'
    },
    restaurant: {
      name: 'Spice Garden',
      address: 'Main Road, Guntur'
    },
    destination: {
      name: 'Your Location',
      address: 'Lakshmipuram, Guntur'
    }
  }), []);

  return (
    <div className='delivery-page'>
      <div className='delivery-container'>
        <div className='delivery-header'>
          <h1>Delivery Tracking</h1>
          <p>Order <strong>{tracking.orderId}</strong> • ETA: <strong>{tracking.eta}</strong></p>
        </div>

        <div className='delivery-grid'>
          <div className='tracking-card'>
            <h2>Live Status</h2>
            <ol className='tracking-steps'>
              {tracking.stages.map(stage => (
                <li key={stage.key} className={`step ${stage.done ? 'done' : ''}`}>
                  <div className='step-marker' />
                  <div className='step-content'>
                    <div className='step-title'>{stage.label}</div>
                    <div className='step-time'>{stage.time}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className='info-card'>
            <h2>Delivery Partner</h2>
            <div className='info-row'>
              <span>Name</span>
              <strong>{tracking.rider.name}</strong>
            </div>
            <div className='info-row'>
              <span>Phone</span>
              <a className='link' href={`tel:${tracking.rider.phone.replace(/[^0-9+]/g, '')}`}>{tracking.rider.phone}</a>
            </div>
            <div className='info-row'>
              <span>Vehicle</span>
              <strong>{tracking.rider.vehicle}</strong>
            </div>
          </div>

          <div className='info-card'>
            <h2>Route</h2>
            <div className='route-box'>
              <div className='route-point'>
                <div className='dot origin' />
                <div>
                  <div className='point-title'>{tracking.restaurant.name}</div>
                  <div className='point-sub'>{tracking.restaurant.address}</div>
                </div>
              </div>
              <div className='route-line' />
              <div className='route-point'>
                <div className='dot destination' />
                <div>
                  <div className='point-title'>{tracking.destination.name}</div>
                  <div className='point-sub'>{tracking.destination.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;


