/**
 * Ensure topic-page hero videos play after View Transitions and under mobile
 * autoplay policies. Runs on every `astro:page-load` (same pattern as shuttleHeroLoop).
 */
const PAGE_HERO_VIDEO_SELECTOR = [
  '.mars-hero-video',
  '.moon-hero-video',
  '.iss-hero-video',
  '.jobs-hero-video',
  '.control-room-hero-video',
].join(', ');

export function initPageHeroVideos(): void {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll(PAGE_HERO_VIDEO_SELECTOR).forEach((el) => {
    if (!(el instanceof HTMLVideoElement)) return;

    if (reducedMotion) {
      el.pause();
      el.removeAttribute('autoplay');
      el.removeAttribute('loop');
      return;
    }

    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;
    el.setAttribute('playsinline', '');
    el.play().catch(() => {});
  });
}
