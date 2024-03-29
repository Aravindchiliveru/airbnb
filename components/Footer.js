import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works?</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is an example a real site</p>
            <p>Its pretty awesome clone</p>
            <p>ARAVIND</p>
            <p>PAPAFAM</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Host an event</p>
            <p>How Hosting works?</p>
            <p>Investors</p>
            <p>Airbnb hosts</p>
            <p>Airbnb premium</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust and Safety</p>
            <p>Say Hi to the trip</p>
            <p>Login now</p>
            <p>Sign up now</p>
        </div>

    </div>
  )
}

export default Footer