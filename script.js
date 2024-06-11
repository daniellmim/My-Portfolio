document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function () {
      document.body.classList.toggle('day-mode');
      const icon = this.querySelector('i');
      if (document.body.classList.contains('day-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      }
  });

  document.querySelector('.contact-btn').addEventListener('click', function () {
      alert('Contact form coming soon!');
  });
});
