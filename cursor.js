const cursor = document.querySelector('.custom-cursor');
  const button = document.querySelector('.button1');
  const button2 = document.querySelector('.button2');
  const svg =document.querySelector('.svg');

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
    }, 200);
  })