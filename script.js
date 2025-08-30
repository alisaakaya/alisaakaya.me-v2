// Smooth-scroll for on-page links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', id);
  });
});

// Wave on hover, every time
const wave = document.querySelector('.wave');
if (wave) {
  const triggerWave = () => {
    wave.style.animation = 'none';
    // reflow to restart animation
    wave.offsetHeight;
    wave.style.animation = 'wave 1.8s ease-in-out';
  };
  wave.addEventListener('mouseenter', triggerWave);
  wave.addEventListener('focus', triggerWave);
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();