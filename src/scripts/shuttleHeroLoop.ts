/**
 * Dual-video crossfade loop for the home hero. Runs on every View Transition
 * (`astro:page-load`) because the first-evaluated page script does not re-run on client navigations.
 */
export function initShuttleHeroLoops(): void {
  const FADE_MS = 480;
  const FADE_SEC = FADE_MS / 1000;

  document.querySelectorAll('.shuttle-hero-root:not([data-shuttle-hero-loop])').forEach((root) => {
    if (!(root instanceof HTMLElement)) return;
    root.dataset.shuttleHeroLoop = '1';

    const stack = root.querySelector('.shuttle-hero-video-stack');
    const videos = stack?.querySelectorAll('.photo-hero-video');
    if (!stack || !videos || videos.length !== 2) return;

    const va = videos[0];
    const vb = videos[1];
    if (!(va instanceof HTMLVideoElement) || !(vb instanceof HTMLVideoElement)) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      vb.remove();
      va.pause();
      va.removeAttribute('autoplay');
      return;
    }

    let top = va;
    let bottom = vb;
    let busy = false;

    function applyStack() {
      top.classList.add('hero-video-on-top');
      bottom.classList.remove('hero-video-on-top');
    }

    function crossfadeToNext() {
      if (busy) return;
      busy = true;
      bottom.currentTime = 0;
      bottom.play().catch(() => {
        busy = false;
      });
      top.classList.add('hero-video-fade-out');

      window.setTimeout(() => {
        const prevTop = top;
        const prevBottom = bottom;
        prevTop.pause();
        prevTop.currentTime = 0;
        top = prevBottom;
        bottom = prevTop;
        applyStack();
        bottom.classList.remove('hero-video-fade-out');
        busy = false;
      }, FADE_MS + 70);
    }

    function onTimeUpdate(ev: Event) {
      if (ev.target !== top || busy) return;
      const d = top.duration;
      if (!d || Number.isNaN(d)) return;
      if (d - top.currentTime <= FADE_SEC) crossfadeToNext();
    }

    function onEnded(ev: Event) {
      if (ev.target !== top || busy) return;
      crossfadeToNext();
    }

    va.addEventListener('timeupdate', onTimeUpdate);
    vb.addEventListener('timeupdate', onTimeUpdate);
    va.addEventListener('ended', onEnded);
    vb.addEventListener('ended', onEnded);

    /* Autoplay policies: ensure the visible track plays after each navigation */
    top.play().catch(() => {});
  });
}
