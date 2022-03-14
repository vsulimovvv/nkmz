window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * Select With Icon
  $('.wSelect-el').wSelect();

  // * ===== Slider
  (function sliderHero() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      navigation: {
        nextEl: '.hero__arrow--next',
        prevEl: '.hero__arrow--prev',
      },
    });
  })();

  (function sliderPhotos() {
    const sliderEl = document.querySelector('.photos__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,

      navigation: {
        nextEl: '.photos__arrow--next',
        prevEl: '.photos__arrow--prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  })();

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);

    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);

        target.classList.toggle('active');

        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };

  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // // * ===== Mixer
  // (function mixer() {
  //   const mixContent = document.querySelector('.mixer__content');
  //   if (mixContent) {
  //     const mixer = mixitup(mixContent);
  //   }
  // })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');

      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }

            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });

        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });

        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }

    bindModal('.btn-consultation', '.popup--consultation', '.popup__close');
    bindModal('.btn-product', '.popup--product', '.popup__close');
    bindModal('.btn-service', '.popup--service', '.popup__close');
  })();

  // // * ===== Toggle Tabs
  // function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  //   const header = document.querySelectorAll(headerSelector);
  //   const tab = document.querySelectorAll(tabSelector);
  //   const content = document.querySelectorAll(contentSelector);

  //   if (header) {
  //     hideTabContent();
  //     showTabContent();

  //     function hideTabContent() {
  //       content.forEach((item) => {
  //         item.classList.remove('active');
  //       });
  //       tab.forEach((item) => {
  //         item.classList.remove(activeClass);
  //       });
  //     }

  //     function showTabContent(i = 0) {
  //       content[i].classList.add('active');
  //       tab[i].classList.add(activeClass);
  //     }

  //     header.forEach((item) => {
  //       if (item) {
  //         item.addEventListener('click', (e) => {
  //           const target = e.target;

  //           if (target.classList.contains(tabSelector.replace(/\./, ''))) {
  //             tab.forEach((item, i) => {
  //               if (target == item || target.parentNode == item) {
  //                 hideTabContent();
  //                 showTabContent(i);
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  // }
  // someTabs(
  //   '.planning__content',
  //   '.planning__nav-btn',
  //   '.planning__panel',
  //   'planning__nav-btn--active'
  // );
});
