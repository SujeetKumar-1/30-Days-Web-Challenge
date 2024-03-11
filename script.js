let cardContainers= [...document.querySelectorAll('.slider')];
let preBtn= [...document.querySelectorAll('.pre-btn')];
let nxtBtn= [...document.querySelectorAll('.next-btn')];

cardContainers.forEach((item, i)=>{
    let containerDimensions= item.getBoundingClientRect();
    let containerWidth= containerDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 90;
    });

    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft-=containerWidth + 90;
    });;
});
