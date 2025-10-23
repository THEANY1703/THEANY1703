// Advanced Cyberpunk Portfolio JavaScript
// Author: Flavio Leotta

class CyberpunkPortfolio {
  constructor() {
    this.init();
    this.setupTypingAnimation();
    this.setupPuzzle();
    this.setupSkillTags();
    this.setupMatrixEffect();
    this.setupScrollEffects();
  }

  init() {
    console.log('🚀 Cyberpunk Portfolio initialized by Flavio Leotta');
    this.addConsoleArt();
  }

  addConsoleArt() {
    const art = `
    ╔══════════════════════════════════════╗
    ║        FLAVIO LEOTTA PORTFOLIO        ║
    ║                                      ║
    ║  Full Stack Developer & IT Specialist ║
    ║  Vue.js | React.js | Laravel | Node  ║
    ║  DevOps | Cloud | Security Expert    ║
    ║                                      ║
    ║  🎯 Ready to build amazing things!   ║
    ╚══════════════════════════════════════╝
    `;
    console.log(art);
  }

  setupTypingAnimation() {
    const commands = [
      'whoami',
      'cat skills.txt',
      'ls -la projects/',
      'git status',
      'npm run dev',
      'docker-compose up',
      'kubectl get pods',
      'systemctl status nginx'
    ];

    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const commandElement = document.getElementById('typing-command');

    if (!commandElement) return;

    const typeCommand = () => {
      const currentCommand = commands[commandIndex];
      
      if (isDeleting) {
        commandElement.textContent = currentCommand.substring(0, charIndex - 1);
        charIndex--;
      } else {
        commandElement.textContent = currentCommand.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentCommand.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        commandIndex = (commandIndex + 1) % commands.length;
        typeSpeed = 500;
      }

      setTimeout(typeCommand, typeSpeed);
    };

    typeCommand();
  }

  setupPuzzle() {
    const correctAnswer = '1991'; // L'anno in cui è nato il web moderno (HTTP/HTML)
    const answerInput = document.getElementById('puzzle-answer');
    const checkButton = document.getElementById('check-answer');
    const feedback = document.getElementById('puzzle-feedback');
    const hintButton = document.getElementById('hint-btn');
    const hintContent = document.getElementById('hint-content');

    if (!answerInput || !checkButton || !feedback) return;

    // Hint system
    const hints = [
      "💡 Indizio 1: Pensa all'anno in cui Tim Berners-Lee ha inventato il World Wide Web...",
      "💡 Indizio 2: È l'anno in cui è stato creato il primo server web e browser...",
      "💡 Indizio 3: L'anno inizia con 19 e finisce con 91...",
      "💡 Indizio 4: È l'anno della nascita di HTTP e HTML...",
      "🎯 Soluzione: 1991 - L'anno della nascita del World Wide Web!"
    ];

    let hintIndex = 0;

    hintButton.addEventListener('click', () => {
      if (hintIndex < hints.length) {
        hintContent.textContent = hints[hintIndex];
        hintContent.classList.add('show');
        hintIndex++;
        
        if (hintIndex >= hints.length) {
          hintButton.textContent = '🎯 Mostra Soluzione';
        }
      }
    });

    // Check answer
    checkButton.addEventListener('click', () => {
      const userAnswer = answerInput.value.trim();
      
      if (userAnswer === correctAnswer) {
        feedback.textContent = '🎉 Perfetto! Hai risolto l\'enigma! Il web moderno è nato nel 1991!';
        feedback.className = 'puzzle-feedback success';
        this.triggerSuccessAnimation();
        this.unlockEasterEgg();
      } else if (userAnswer.length === 4 && /^\d+$/.test(userAnswer)) {
        feedback.textContent = '❌ Sbagliato! Prova ancora o chiedi un indizio.';
        feedback.className = 'puzzle-feedback error';
        this.shakeInput(answerInput);
      } else {
        feedback.textContent = '⚠️ Inserisci un numero a 4 cifre valido.';
        feedback.className = 'puzzle-feedback error';
      }
    });

    // Enter key support
    answerInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        checkButton.click();
      }
    });

    // Input validation
    answerInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
    });
  }

  triggerSuccessAnimation() {
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
      this.createConfetti();
    }

    // Add success sound effect (visual feedback)
    const successElement = document.createElement('div');
    successElement.innerHTML = '🎊';
    successElement.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 4rem;
      z-index: 1000;
      animation: explode 2s ease-out forwards;
      pointer-events: none;
    `;
    
    document.body.appendChild(successElement);
    
    setTimeout(() => {
      document.body.removeChild(successElement);
    }, 2000);
  }

  createConfetti() {
    const confetti = document.createElement('div');
    confetti.innerHTML = ['🎉', '🎊', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)];
    confetti.style.cssText = `
      position: fixed;
      top: -10px;
      left: ${Math.random() * 100}vw;
      font-size: ${Math.random() * 20 + 10}px;
      z-index: 1000;
      animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
      pointer-events: none;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      if (document.body.contains(confetti)) {
        document.body.removeChild(confetti);
      }
    }, 5000);
  }

  shakeInput(input) {
    input.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
      input.style.animation = '';
    }, 500);
  }

  unlockEasterEgg() {
    // Add special CSS animations for success
    const style = document.createElement('style');
    style.textContent = `
      @keyframes explode {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.8; }
        100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
      }
      
      @keyframes confetti-fall {
        0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      
      .easter-egg-unlocked {
        animation: rainbow-glow 2s ease-in-out infinite alternate;
      }
      
      @keyframes rainbow-glow {
        0% { text-shadow: 0 0 10px #ff0000; }
        16% { text-shadow: 0 0 10px #ff8000; }
        33% { text-shadow: 0 0 10px #ffff00; }
        50% { text-shadow: 0 0 10px #00ff00; }
        66% { text-shadow: 0 0 10px #0080ff; }
        83% { text-shadow: 0 0 10px #8000ff; }
        100% { text-shadow: 0 0 10px #ff0080; }
      }
    `;
    document.head.appendChild(style);

    // Add rainbow effect to the main title
    const title = document.querySelector('.glitch');
    if (title) {
      title.classList.add('easter-egg-unlocked');
    }
  }

  setupSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        this.createRippleEffect(tag);
      });
      
      tag.addEventListener('click', () => {
        this.showSkillInfo(tag);
      });
    });
  }

  createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(0, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (rect.width / 2 - size / 2) + 'px';
    ripple.style.top = (rect.height / 2 - size / 2) + 'px';
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
      if (element.contains(ripple)) {
        element.removeChild(ripple);
      }
    }, 600);
  }

  showSkillInfo(tag) {
    const skillName = tag.textContent;
    const skillLevel = tag.classList.contains('expert') ? 'Expert' : 
                      tag.classList.contains('advanced') ? 'Advanced' : 'Intermediate';
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    tooltip.innerHTML = `
      <strong>${skillName}</strong><br>
      Livello: ${skillLevel}
    `;
    tooltip.style.cssText = `
      position: absolute;
      background: rgba(0, 0, 0, 0.9);
      color: #00ffff;
      padding: 0.5rem;
      border-radius: 5px;
      font-size: 0.8rem;
      z-index: 1000;
      pointer-events: none;
      border: 1px solid #00ffff;
      box-shadow: 0 0 10px #00ffff;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = tag.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
    
    setTimeout(() => {
      if (document.body.contains(tooltip)) {
        document.body.removeChild(tooltip);
      }
    }, 2000);
  }

  setupMatrixEffect() {
    // Create falling code effect
    const matrixContainer = document.querySelector('.matrix-bg');
    if (!matrixContainer) return;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 50; i++) {
      this.createMatrixColumn(characters, matrixContainer);
    }
  }

  createMatrixColumn(characters, container) {
    const column = document.createElement('div');
    column.style.cssText = `
      position: absolute;
      top: -100px;
      left: ${Math.random() * 100}%;
      color: #00ff41;
      font-family: 'Share Tech Mono', monospace;
      font-size: ${Math.random() * 10 + 10}px;
      opacity: ${Math.random() * 0.5 + 0.1};
      animation: matrix-fall ${Math.random() * 10 + 10}s linear infinite;
      pointer-events: none;
    `;
    
    const text = Array.from({length: 20}, () => 
      characters[Math.floor(Math.random() * characters.length)]
    ).join('<br>');
    
    column.innerHTML = text;
    container.appendChild(column);
  }

  setupScrollEffects() {
    // Parallax effect for cards
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
        }
      });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
      observer.observe(card);
    });

    // Add scroll-based glow effect
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.hero-section');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes matrix-fall {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(100vh);
    }
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CyberpunkPortfolio();
});

// Add some console easter eggs
console.log('%c🚀 Benvenuto nel portfolio di Flavio Leotta!', 'color: #00ffff; font-size: 16px; font-weight: bold;');
console.log('%c💡 Prova a risolvere l\'enigma per sbloccare effetti speciali!', 'color: #ff00ff; font-size: 14px;');
console.log('%c🔧 Sei un developer? Controlla il codice sorgente!', 'color: #00ff41; font-size: 12px;');

// Add hidden easter egg in the HTML
document.addEventListener('DOMContentLoaded', () => {
  // Hide the answer in a data attribute for debugging
  const puzzleCard = document.querySelector('.puzzle-card');
  if (puzzleCard) {
    puzzleCard.setAttribute('data-answer', '1991');
    puzzleCard.setAttribute('data-hint', 'Tim Berners-Lee created the World Wide Web in this year');
  }
});