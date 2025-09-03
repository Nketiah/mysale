'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scroll for navigation buttons
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button')?.textContent?.includes('Scroll for more')) {
        e.preventDefault()
        const nextSection = document.querySelector('section:nth-of-type(2)')
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    // Add click event listeners
    document.addEventListener('click', handleSmoothScroll)

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      observer.observe(section)
    })

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll)
      observer.disconnect()
    }
  }, [])

  return null
}
