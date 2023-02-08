import React from 'react'
import ReactDOM from 'react-dom/client'

import { GG13Dropdown } from 'gg13-tw-dropdown'

const iconComponent = (
  <svg
    className='w-6 aspect-square'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
  </svg>
)

const content = (
  <div>
    <div className='py-1'>
      <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
        Account settings
      </a>
    </div>
    <div className='py-1'>
      <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
        Support
      </a>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div className='p-4'>
      <GG13Dropdown containerClass='right-auto left-0' iconComponent={iconComponent}>
        {content}
      </GG13Dropdown>
    </div>
  </React.StrictMode>,
)
