"use strict";

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
  function callback(entries, obs) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll(".item");
  targets.forEach((target) => {
    observer.observe(target);
  });

  // title===================================
  const targetTitles = document.querySelectorAll(".title");

  const titleCb = function (entries, obs) {
    // console.log(entries);
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };

  const titleOptions = {
    threshold: 1,
    root: null,
    // rootMargin:"-30%",
  };

  const titleObserver = new IntersectionObserver(titleCb);
  targetTitles.forEach((title) => {
    titleObserver.observe(title, titleOptions);
  });

  // hamburger
  const sp = document.querySelector(".globalMenuSp");

  // function spMenu(){
  const hamb = document.querySelector(".hamburger");
  hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");

    if (hamb.classList.contains("active")) {
      sp.classList.add("active");
    } else {
      sp.classList.remove("active");
      
    }
  });
  // }
}
