<script setup lang="ts">
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <img src="/home_banner.jpg" alt="Støvring eSport" class="hero-bg">
      <div class="hero-overlay" />
      <div class="hero-content">
        <h1>Velkommen til Støvring eSport</h1>
        <p>Vi fremmer børns sociale færdigheder og IT-kundskaber gennem gaming i et trygt og struktureret miljø.</p>
        <div class="hero-buttons">
          <NuxtLink to="/tilmeld" class="btn btn-primary">Tilmeld dig nu</NuxtLink>
          <NuxtLink to="/bestyrelsen" class="btn btn-secondary">Kontakt os</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section">
      <div class="uk-container">
        <h2 class="section-title">Hvorfor Støvring eSport?</h2>
        <p class="section-subtitle">Vi tilbyder mere end bare gaming - vi skaber et fællesskab hvor børn udvikler sig.</p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>Struktureret Gaming</h3>
            <p>Professionelle trænere sikrer et lærerigt og sjovt miljø med fokus på fair play.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>Sociale Færdigheder</h3>
            <p>Børnene lærer samarbejde, kommunikation og at være del af et hold.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💻</div>
            <h3>IT-Kompetencer</h3>
            <p>Gennem gaming udvikles tekniske færdigheder og digital forståelse.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Games Section -->
    <section class="section" style="background: var(--bg-darker);">
      <div class="uk-container">
        <h2 class="section-title">Vores Hold</h2>
        <p class="section-subtitle">Vælg det spil der passer bedst til dig.</p>

        <div class="games-grid">
          <NuxtLink to="/fortnite" class="game-card">
            <img src="/fortnite_banner.jpg" alt="Fortnite" class="game-card-image">
            <div class="game-card-content">
              <h3 class="game-card-title">Fortnite</h3>
              <p class="game-card-desc">Det populære battle royale spil med fokus på strategi og hurtige beslutninger.</p>
              <div class="game-card-schedule">📅 Mandag & tirsdag 17:30-19:30</div>
            </div>
          </NuxtLink>

          <NuxtLink to="/counterstrike" class="game-card">
            <img src="/csgo_banner.jpg" alt="Counter-Strike" class="game-card-image">
            <div class="game-card-content">
              <h3 class="game-card-title">Counter-Strike</h3>
              <p class="game-card-desc">Det klassiske taktiske shooter der kræver teamwork og præcision.</p>
              <div class="game-card-schedule">📅 Onsdag 17:30-19:30</div>
            </div>
          </NuxtLink>

          <NuxtLink to="/minecraft" class="game-card">
            <img src="/minecraft_banner.jpg" alt="Minecraft" class="game-card-image">
            <div class="game-card-content">
              <h3 class="game-card-title">Minecraft</h3>
              <p class="game-card-desc">Det kreative sandkassespil hvor fantasien sætter grænserne.</p>
              <div class="game-card-schedule">📅 Torsdag 17:30-19:30</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section">
      <div class="uk-container" style="text-align: center;">
        <h2 class="section-title">Klar til at komme i gang?</h2>
        <p class="section-subtitle">Det koster kun 500 kr. per halvår. Du er altid velkommen til at kigge forbi og se lokalerne.</p>
        <div class="hero-buttons">
          <NuxtLink to="/tilmeld" class="btn btn-primary">Tilmeld dig i dag</NuxtLink>
          <a href="https://www.facebook.com/stoevringesport" target="_blank" class="btn btn-secondary">Følg os på Facebook</a>
        </div>
      </div>
    </section>

    <!-- Facebook Feed Section -->
    <section class="section" style="background: var(--bg-darker);">
      <div class="uk-container">
        <h2 class="section-title">Seneste Nyt</h2>
        <p class="section-subtitle">Følg med i hvad der sker hos Støvring eSport.</p>
        <FacebookFeed />
      </div>
    </section>
  </div>
</template>
