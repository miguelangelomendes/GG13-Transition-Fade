import React, { useState } from 'react'

interface Props {
  iconComponent: React.ReactNode
  children: React.ReactNode
  className?: string
  iconClass?: string
  containerClass?: string
}

export default function Dropdown({
  children,
  iconComponent,
  containerClass = '',
  iconClass = '',
  className = '',
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const handleClickOutside = () => {
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <div className={`clickable relative z-[3] ${iconClass}`} onClick={handleClick}>
        {iconComponent}
      </div>
      {isOpen && (
        <>
          <div className='fixed inset-0 z-[1]' onClick={handleClickOutside} />
          <div className={`absolute right-0 z-[3] mt-1 rounded-lg shadow-lg ${containerClass}`}>{children}</div>
        </>
      )}
    </div>
  )
}
