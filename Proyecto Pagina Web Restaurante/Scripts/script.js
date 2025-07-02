document.addEventListener('DOMContentLoaded', function() {
    // Mostrar overlay de carga
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
      <div class="loading-spinner"></div>
      <p>Cargando Mahallo Restaurante...</p>
      <p>Por Favor, Espere...</p>
    `;
    document.body.appendChild(loadingOverlay);
  
    // Ocultar overlay después de 1.5 segundos (simulando carga)
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';
      setTimeout(() => {
        loadingOverlay.remove();
      }, 500);
    }, 1500);
  
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  
    // Mobile menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
    document.querySelector('.logo').appendChild(menuToggle);
  
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
  
    // Filtro de categorías de menú con animación mejorada
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Animación de botón activo
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.style.transform = 'scale(1)';
        });
        button.classList.add('active');
        button.style.transform = 'scale(1.05)';
        
        const category = button.dataset.category;
        let delay = 0;
        
        productCards.forEach(card => {
          card.style.transition = 'all 0.4s ease ' + delay + 'ms';
          
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.95)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 400);
          }
          
          delay += 50;
        });
      });
    });
  
    // Paginación del menú con animación
    const pageButtons = document.querySelectorAll('.page-btn');
    const menuPages = document.querySelectorAll('.menu-grid');
    
    function showMenuPage(pageNumber) {
      menuPages.forEach((page, index) => {
        if (index + 1 === parseInt(pageNumber)) {
          page.style.display = 'grid';
          setTimeout(() => {
            page.style.opacity = '1';
            page.style.transform = 'translateY(0)';
          }, 50);
        } else {
          page.style.opacity = '0';
          page.style.transform = 'translateY(20px)';
          setTimeout(() => {
            page.style.display = 'none';
          }, 300);
        }
      });
      
      // Actualizar botones activos con animación
      pageButtons.forEach(button => {
        button.classList.remove('active');
        button.style.transform = 'scale(1)';
        
        if (button.dataset.page === pageNumber.toString()) {
          button.classList.add('active');
          button.style.transform = 'scale(1.1)';
        }
      });
    }
    
    pageButtons.forEach(button => {
      button.addEventListener('click', () => {
        showMenuPage(button.dataset.page);
        
        // Scroll suave al inicio de la sección
        document.querySelector('.menu-header').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
    
    // Mostrar primera página por defecto
    showMenuPage(1);
  
    // Modal para detalles del plato mejorado
    const modal = document.getElementById('dishModal');
    const closeModal = document.querySelector('.close-modal');
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    // Cerrar modal
    function closeModalFunc() {
      modal.style.opacity = '0';
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    }
    
    closeModal.addEventListener('click', closeModalFunc);
    
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModalFunc();
      }
    });
  
    
  
    // Animaciones al hacer scroll mejoradas
    function animateOnScroll() {
      const elements = document.querySelectorAll(
        '.product-card, .info-item, .form-group, .chef-card, .timeline-item, .philosophy-card'
      );
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
      
      // Animación específica para timeline
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 200);
        }
      });
    }
    
    // Establecer propiedades iniciales para la animación
    document.querySelectorAll(
      '.product-card, .info-item, .form-group, .chef-card, .timeline-item, .philosophy-card'
    ).forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);
  });
  // Animación de la línea de tiempo
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;
    
    timelineItems.forEach((item, index) => {
      const itemPosition = item.getBoundingClientRect().top;
      const animationStart = windowHeight / 1.3;
      
      if (itemPosition < animationStart) {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 200);
      }
    });
  }
  
  // Event listeners para la animación
  window.addEventListener('load', animateTimeline);
  window.addEventListener('scroll', animateTimeline);
  
  // Menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });