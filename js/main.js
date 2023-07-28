'use strict';

{
    // function returnPageTop(entry,obs){
    //     entry.target.classList.add('active');
    //     console.log("active");
    //     obs.unobserve(entry.target);     
    // }
    // const option ={
    //     threshold:0.5
    // }
    
    // const obs =new IntersectionObserver(returnPageTop,option);
    // const targetImg = document.querySelector(".scroll");
    // obs.observe(targetImg,option); 
    

    // observer=====================================
    function callback(entries,obs){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }

            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }

    const options={
        threshold:0.2
    };

    const observer =new IntersectionObserver(callback,options);
    const targets = document.querySelectorAll(".animate");
    targets.forEach((target)=>{
        observer.observe(target);
    })
}