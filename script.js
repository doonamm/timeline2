window.addEventListener('load', function(){
    const milestones = document.querySelectorAll('.milestone');
    const icons = document.querySelectorAll('.icon i');
    const scrollTopBtn = document.getElementById('scroll-top');

    scrollTopBtn.addEventListener('click', scrollToTop);
    document.addEventListener('scroll', scrolling);
    document.addEventListener('resize', scrolling);
    icons.forEach(el => el.addEventListener('click', scrollTo))
    scrolling();

    function scrolling(){
      
        const {scrollTop, offsetHeight} = document.documentElement;
        milestones.forEach(el => {
            if(el.offsetTop <= scrollTop + offsetHeight*66/100){
                el.classList.add('show');
                if(el.offsetTop >= scrollTop + offsetHeight*20/100
                    && el.offsetTop <= scrollTop + offsetHeight*60/100)
                    el.classList.add('main');
                else    
                    el.classList.remove('main');
            }
            else{
                el.classList.remove('show');
            }
        })
    }
    function scrollTo(e){
        const posY = document.documentElement.scrollTop + e.currentTarget.getBoundingClientRect().top;
        window.scrollTo({top: posY, behavior: 'smooth'});
    }
    function scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});