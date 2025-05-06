import { ref, onMounted, onUnmounted } from 'vue'

export function useAnimateOnScroll() {
  onMounted(() => {
    // Wait a short time to ensure DOM is fully rendered
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll')
      
      // Handle initial visibility check for elements already in viewport
      const checkInitialVisibility = () => {
        animatedElements.forEach(el => {
          const rect = el.getBoundingClientRect()
          const isVisible = 
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
          
          if (isVisible) {
            el.classList.add('animate-active')
          }
        })
      }
      
      // Create observer with appropriate options
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active')
          } else {
            // Only remove class if element has scrolled significantly out of view
            if (entry.boundingClientRect.top > window.innerHeight || 
                entry.boundingClientRect.bottom < 0) {
              entry.target.classList.remove('animate-active')
            }
          }
        })
      }, {
        threshold: [0.05, 0.1, 0.2], // Multiple thresholds for better detection
        rootMargin: '10px' // Small margin to trigger slightly before elements enter viewport
      })
      
      // Observe all elements
      animatedElements.forEach(el => {
        observer.observe(el)
      })
      
      // Run initial check
      checkInitialVisibility()
      
      // Handle resize and scroll events for edge cases
      const handleScroll = () => {
        checkInitialVisibility()
      }
      
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
      
      // Cleanup on unmount
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
        
        if (observer) {
          animatedElements.forEach(el => {
            observer.unobserve(el)
          })
          observer.disconnect()
        }
      })
    }, 100) // Short delay to ensure DOM is ready
  })
} 