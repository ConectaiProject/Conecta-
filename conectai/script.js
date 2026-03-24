// MENU (rolagem suave ao clicar)
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const section = document.querySelector(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// VAGAS (clicar no card)
document.querySelectorAll('.card-vaga').forEach(card => {
  card.addEventListener('click', () => {
    alert('Você clicou em uma vaga! 🚀');
  });
});


// BOTÕES DA EQUIPE
document.querySelectorAll('.item-card').forEach(item => {
  item.addEventListener('click', () => {
    alert('Mais informações sobre a equipe 👨‍💻');
  });
});


// FORMULÁRIO
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const mensagem = form.querySelector('textarea').value;

  if (nome === '' || email === '' || mensagem === '') {
    alert('Preencha todos os campos!');
    return;
  }

  alert(`Obrigado pelo contato, ${nome}! ✅`);

  form.reset();
});


// EFEITO NAVBAR AO ROLAR
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background = '#083b82';
  } else {
    navbar.style.background = '#0B53B8';
  }
});