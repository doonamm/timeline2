window.addEventListener('load', function(){
    const milestones = document.querySelectorAll('.milestone');
    const scrollTopBtn = document.getElementById('scroll-top');
    
    scrollTopBtn.addEventListener('click', scrollToTop);
    document.addEventListener('scroll', scrolling);
    document.addEventListener('resize', scrolling);
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
    function scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});