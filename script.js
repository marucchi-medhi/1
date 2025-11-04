

 
//  なんだこれ
 
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// スイーパー

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,


  
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets: true
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   breakpoints: {
    0:{
      slidesPerView: 1
    },
    1024:{
      slidesPerView: 2
    },
    1300:{
      slidesPerView: 3
    }
  }
  
});


 const pagetop = document.getElementById("js-pagetop");

  pagetop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });




// 開くボタン
document.querySelectorAll('button[data-popup]').forEach(btn => {
  btn.addEventListener('click', () => {
    const popupId = btn.getAttribute('data-popup');
    document.querySelectorAll('.popup').forEach(p => p.classList.remove('active')); // 全部非表示
    document.getElementById(popupId).classList.add('active');
    document.getElementById('overlay').classList.add('active'); // 背景も表示
  });
});

// 閉じるボタン
document.querySelectorAll('.close-btn').forEach(close => {
  close.addEventListener('click', () => {
    closePopup();
  });
});

// オーバーレイを押したら閉じる
document.getElementById('overlay').addEventListener('click', () => {
  closePopup();
});

// 共通の閉じる関数
function closePopup() {
  document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
  document.getElementById('overlay').classList.remove('active');
}



    // 問題開閉
    const accBtns = document.querySelectorAll(".accordion button");
    accBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        const content = btn.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });

