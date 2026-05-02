'use client'

import { useEffect, useRef } from 'react'

export default function TiltWrapper({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('[data-tilt]')
    if (!cards) return

    const cleanup = []

    cards.forEach((card) => {
      card.style.transition = 'transform 0.15s ease-out'
      card.style.willChange = 'transform'

      const onMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const rotX = ((y - rect.height / 2) / (rect.height / 2)) * -7
        const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 7
        card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.025,1.025,1.025)`
      }

      const onLeave = () => {
        card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
      }

      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanup.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => cleanup.forEach((fn) => fn())
  }, [])

  return <div ref={ref}>{children}</div>
}
