const cursor = document.querySelector('.custom-cursor');
  const button = document.querySelector('.button1');
  const button2 = document.querySelector('.button2');
  const svg =document.querySelector('.svg');
  const timon = document.querySelector('.timon');
  const svg2 =document.querySelector('.svg2');
  const html = document.querySelector('html');
  const h2 = document.querySelector('h2');
  const eu = document.querySelector('.eu');
  const eu2 = document.querySelector('.eu2');

  document.addEventListener('mousemove', e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const buttonRect = button.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;


    // Calculate cursor position relative to button
    const relativeX = mouseX - centerX;
    const relativeY = mouseY - centerY;
    
    // Calculate angle between cursor and button
    const angle = Math.atan2(relativeY, relativeX)-45;

    if(centerX<=mouseX && centerY>=mouseY){
        cursor.style.transform = `translate(${mouseX-10}px, ${mouseY-25}px) rotate(${angle}rad)`;
    }
    if(centerX>=mouseX && centerY<=mouseY){
        cursor.style.transform = `translate(${mouseX-25}px, ${mouseY-10}px) rotate(${angle}rad)`;
    }
    if(centerX<=mouseX && centerY<=mouseY){
        cursor.style.transform = `translate(${mouseX-10}px, ${mouseY-10}px) rotate(${angle}rad)`;
    }
    if(centerX>=mouseX && centerY>=mouseY){
        cursor.style.transform = `translate(${mouseX-20}px, ${mouseY-25}px) rotate(${angle}rad)`;
    }
   
  });

  button2.addEventListener('mouseover', e=> {
    cursor.style.backgroundImage = 'none';
  })
  button2.addEventListener('mouseout', e=> {
    cursor.style.backgroundImage = 'url("cursor.png")';
  })

  button.addEventListener('click', e=> {
    svg.style.display = 'block';
    setTimeout(() => {
        svg.style.opacity = '1'; // Set opacity to 1 after a short delay
    }, 700);
  })

  button.addEventListener('click', e=> {
    svg2.style.display = 'block';
    setTimeout(() => {
        svg2.style.opacity = '1'; // Set opacity to 1 after a short delay
    }, 700);
  })

  document.addEventListener('mouseout', e=>{
    cursor.style.display = 'none';
  })

  document.addEventListener('mouseover', e=>{
    cursor.style.display = 'block';
  })

  button2.addEventListener('click', e=>{
     button2.classList.add('clicked');
    setTimeout(function() {
      button2.classList.remove('clicked');
    }, 500);
    eu.style.display = 'none';
    eu2.style.display = 'block';
    h2.textContent = 'Oops! A aparut o eroare. Ce ai zice sa incerci iar?';
  })

  button.addEventListener('click', e=>{
    button.classList.add('clicked');
   setTimeout(function() {
     button.classList.remove('clicked');
   }, 500);
 })

 button.addEventListener('click', e=> {
  setTimeout(() => {
  cursor.style.backgroundImage = 'none';
  timon.style.display = 'block';
  button.style.display = 'none';
  button2.style.display = 'none';
  html.style.cursor = 'auto';
  eu.style.display = 'none';
  eu2.style.display = 'none';
}, 400);
  setTimeout(() => {
      timon.style.opacity = '1';
  }, 500);
  h2.innerHTML = "&#129717; &#129717; Love u Mangusta! &#129717; &#129717;";
})
