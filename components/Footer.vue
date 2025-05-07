<template>
  <footer class="bg-wave-dark text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Contact Information -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-wave-gold">Kontakt</h3>
          <address class="not-italic text-gray-300">
            WaveCity Kitchen & Bar<br />
            Hongkongstraße 4<br />
            20457 Hamburg
          </address>
          <a href="mailto:event@wavecity-kitchenbar.de" class="inline-block px-4 py-2 text-gray-300 hover:text-wave-gold transition-colors border border-gray-700 rounded-lg hover:border-wave-gold">
            event@wavecity-kitchenbar.de
          </a>
        </div>

        <!-- Opening Hours -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-wave-gold">Öffnungszeiten</h3>
          <div class="text-gray-300 space-y-2">
            <p class="flex justify-between items-center">
              <span>Montag - Donnerstag:</span>
              <span>11:30 - 23:00</span>
            </p>
            <p class="flex justify-between items-center">
              <span>Freitag - Samstag:</span>
              <span>11:30 - 00:00</span>
            </p>
            <p class="flex justify-between items-center">
              <span>Sonntag:</span>
              <span>12:00 - 22:00</span>
            </p>
          </div>
        </div>

        <!-- Legal Links -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-wave-gold">Rechtliches</h3>
          <div class="flex flex-col space-y-2">
            <NuxtLink to="/impressum" class="px-4 py-2 text-gray-300 hover:text-wave-gold transition-colors border border-gray-700 rounded-lg hover:border-wave-gold">
              Impressum
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} WaveCity Kitchen & Bar. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No special setup needed
</script>

<style scoped>
/* Add smooth transitions for all interactive elements */
a, button {
  transition: all 0.3s ease-in-out;
}

/* Add hover effect for links */
a:hover {
  transform: translateY(-1px);
}

/* Add subtle shadow on hover */
a:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style> 