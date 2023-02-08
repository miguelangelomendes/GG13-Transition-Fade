import React, { useEffect, useRef } from 'react'

interface Props {
  isShown: boolean
  children: React.ReactNode
  duration?: number
  className?: string
  timingFunction?: string
  onClick?: () => void
  onTransitionStart?: () => void
  onTransitionEnd?: () => void
}

export default function TransitionFade({
  isShown,
  children,
  className = '',
  duration = 500,
  timingFunction = 'ease-in-out',
  onClick,
  onTransitionStart,
  onTransitionEnd,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleTransitionStart = () => {
    onTransitionStart?.()
  }

  const handleTransitionEnd = () => {
    onTransitionEnd?.()
  }

  useEffect(() => {
    const target = ref.current
    target?.addEventListener('transitionstart', handleTransitionStart)
    target?.addEventListener('transitionend', handleTransitionEnd)

    return () => {
      target?.removeEventListener('transitionstart', () => handleTransitionStart)
      target?.removeEventListener('transitionend', () => handleTransitionStart)
    }
  }, [ref])

  return (
    <div
      ref={ref}
      className={className}
      onClick={() => onClick?.()}
      style={{
        opacity: isShown ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionProperty: 'opacity',
        transitionTimingFunction: timingFunction,
        msTransitionTimingFunction: timingFunction,
      }}
    >
      {children}
    </div>
  )
}
