document.addEventListener('DOMContentLoaded', function() {
  // Animaciones para las nuevas secciones
  const animateSections = function() {
    const sections = {
      consejos: document.querySelectorAll('.consejo-card'),
      rutinas: document.querySelectorAll('.rutina-card'),
      equipamiento: document.querySelectorAll('.equipo-card')
    };
    
    const windowHeight = window.innerHeight;
    
    for (const [section, elements] of Object.entries(sections)) {
      if (!elements) continue;
      
      elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const animationPoint = windowHeight * 0.85;
        
        if (elementPosition < animationPoint) {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, index * 150);
        }
      });
    }
  };

  // Inicializar elementos animados
  const initAnimations = function() {
    const animatedElements = [
      ...document.querySelectorAll('.consejo-card'),
      ...document.querySelectorAll('.rutina-card'),
      ...document.querySelectorAll('.equipo-card')
    ];
    
    animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  };

  // Efectos hover específicos para cada sección
  const setupHoverEffects = function() {
    // Consejos
    const consejoCards = document.querySelectorAll('.consejo-card');
    consejoCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'var(--shadow-md)';
      });
    });
    
    // Rutinas
    const rutinaCards = document.querySelectorAll('.rutina-card');
    rutinaCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.rutina-header').style.background = 
          'linear-gradient(135deg, var(--primary), var(--primary-dark))';
      });
      
      card.addEventListener('mouseleave', () => {
        card.querySelector('.rutina-header').style.background = 
          'linear-gradient(135deg, var(--primary-light), var(--primary))';
      });
    });
    
    // Equipamiento
    const equipoCards = document.querySelectorAll('.equipo-card');
    equipoCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.borderTopColor = 'var(--primary)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.borderTopColor = 'var(--accent)';
      });
    });
  };

  // Inicialización
  initAnimations();
  setupHoverEffects();
  window.addEventListener('scroll', animateSections);
  animateSections(); // Ejecutar una vez al cargar

  // Efecto de carga inicial
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});