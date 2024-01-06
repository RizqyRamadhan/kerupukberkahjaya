// Efek paralaks pada header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.transform = translateY(${window.scrollY * 0.5}px);
  });
  
  // Animasi produk saat dihover
  const produkItems = document.querySelectorAll('.produk');
  produkItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.05)';
      item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
  
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
  });