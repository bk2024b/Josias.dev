import React from 'react'

const Footer = () => {
  return (
      <div className='mt-20'>
          <div className='text-center'>
              {/* L ogo */}
              {/* Mon mail josiasboco@gmail.com */}
          </div>
          <div className='text-center sm:flex items-center justify-between border-top border-gray-400 mx-[10%] mt-12 py-6'>
              <p>2025 Josias Boco. All rights reserved.</p>
              <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-6'>
                  <li><a target='_blank' href="">Github </a></li>
                  <li><a target='_blank' href="">LinkedIn </a></li>
                  <li><a target='_blank' href="">Instagram </a></li>
              </ul>
          </div>
      </div>
  )
}

export default Footer