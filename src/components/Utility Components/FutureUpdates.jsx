import React from 'react'

function FutureUpdates() {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <ul className='w-96 flexCol gap-2 items-start'>
        <li>#Improve Pagination Mechanism </li>
        <li>#
          Separate the State of Each Page, As Now All Pages Share the Global
          State Which Get from the FilterSlice, Ex. the Filter Set in Women Page
          is Applied to The Men Page Also
        </li>
        <li>#Improve Layout Shift Metric</li>
        <li>#Implement Stripe for Checkout</li>
      </ul>
    </div>
  );
}

export default FutureUpdates