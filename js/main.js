document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const menuLines = menuButton.querySelectorAll('.menu-line');

  function closeMenu() {
    mobileMenu.classList.add('hidden');

    menuButton.setAttribute('aria-expanded', 'false');

    menuLines[0].classList.remove('translate-y-[11px]', 'rotate-45');
    menuLines[1].classList.remove('opacity-0');
    menuLines[2].classList.remove('-translate-y-[11px]', '-rotate-45');
  }

  menuButton.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
      closeMenu();
      return;
    }

    mobileMenu.classList.remove('hidden');

    menuButton.setAttribute('aria-expanded', 'true');

    menuLines[0].classList.add('translate-y-[11px]', 'rotate-45');
    menuLines[1].classList.add('opacity-0');
    menuLines[2].classList.add('-translate-y-[11px]', '-rotate-45');
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});
