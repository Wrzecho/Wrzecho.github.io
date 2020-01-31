const moveCard = () => {
    const mainCard = document.querySelector('.main');
    const nextCard = document.querySelector('.tn');
    const prevCard = document.querySelector('.tp');
    const nextCardB = document.querySelector('.tn-2');
    const prevCardB = document.querySelector('.tp-2');

    nextCardB.classList.remove('tn-2');
    nextCardB.classList.add('tn');
    nextCard.classList.remove('tn');
    nextCard.classList.add('main');
    mainCard.classList.remove('main');
    mainCard.classList.add('tp');
    prevCard.classList.remove('tp');
    prevCard.classList.add('tp-2');
    prevCardB.classList.remove('tp-2');
    prevCardB.classList.add('tn-2');
}