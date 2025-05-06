<template>
  <div class="bg-wave-sand min-h-screen">
    <!-- Simple header with back button -->
    <div class="bg-wave-ocean py-4 text-white">
      <div class="container mx-auto px-4 flex items-center">
        <a href="/" class="flex items-center text-white hover:text-opacity-80 transition-opacity">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Zurück zur Startseite</span>
        </a>
      </div>
    </div>

    <!-- Impressum content -->
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-3xl font-bold mb-8 text-wave-dark">Impressum</h1>
      
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4 text-wave-ocean">Angaben gemäß § 5 TMG</h2>
        
        <div class="mb-8">
          <p class="mb-1 font-semibold">W&W vermögensverwaltende gmbH</p>
          <p class="mb-1">Am Kaiserkai 8</p>
          <p class="mb-1">20457 Hamburg</p>
        </div>
        
        <h2 class="text-xl font-semibold mb-4 text-wave-ocean">Kontakt</h2>
        <div class="mb-8">
          <p class="mb-1">E-Mail: <a href="mailto:event@wavecity-kitchenbar.de" class="text-wave-ocean hover:underline">event@wavecity-kitchenbar.de</a></p>
        </div>
        
        <h2 class="text-xl font-semibold mb-4 text-wave-ocean">Vertretungsberechtigt</h2>
        <div class="mb-8">
          <p class="mb-1">Geschäftsführer: W&W vermögensverwaltende gmbH</p>
        </div>
        
        <h2 class="text-xl font-semibold mb-4 text-wave-ocean">Registereintrag</h2>
        <div class="mb-8">
          <p class="mb-1">Registergericht: Amtsgericht Hamburg</p>
        </div>
        
        <h2 class="text-xl font-semibold mb-4 text-wave-ocean">Streitschlichtung</h2>
        <div class="mb-8">
          <p class="mb-4">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="text-wave-ocean hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
        
        <h2 class="text-xl font-semibold mb-4 text-wave-ocean">Haftung für Inhalte</h2>
        <div class="mb-8">
          <p class="mb-4">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
        </div>
      </div>
    </div>
    
    <!-- Simple Footer -->
    <footer class="py-6 bg-wave-dark text-white text-center text-sm">
      <div class="container mx-auto">
        <div class="flex justify-center space-x-4 mb-2">
          <a href="/" class="text-white hover:text-wave-ocean transition-colors">Startseite</a>
          <span class="text-white/40">|</span>
          <a href="mailto:event@wavecity-kitchenbar.de" class="text-white hover:text-wave-ocean transition-colors">Kontakt</a>
        </div>
        <p class="text-white/60">&copy; 2023 Wave City Kitchen & Bar. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No special setup needed for this page
</script> 