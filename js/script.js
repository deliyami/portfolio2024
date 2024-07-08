const HAMBURGER_MENU = ['project', 'other'];
const SCROLL_SPEED = 800;
let isNeedScroll = true;
const RESPONSIVE_WIDTH = 960

const FISH_WAVE_SCROLL_START_AT = 200
const FISH_WAVE_SCROLL_END_AT = 1500
const FISH_WAVE_SECOND_SCROLL_START_AT = 600
const FISH_WAVE_SECOND_SCROLL_END_AT = 2000

const FISH_PX = 250

$(document).ready(function () {
  const ham = $('.hamburger-button');
  const hamCancel = $('.hamburger-cancel-button');
  const nav = $('.hamburger-menu');
  function handleNav() {
    nav.toggleClass('active');
  }
  ham.on('click', handleNav);
  hamCancel.on('click', handleNav);

  $('.nav-top').click(() => {
    if ($(window).width() >= RESPONSIVE_WIDTH)
      $('.SP-container').animate({ scrollTop: 0 }, SCROLL_SPEED);
    else $('html, body').animate({ scrollTop: 0 }, SCROLL_SPEED);
    return false;
  });

  $('.nav-skill').click(() => {
    if ($(window).width() >= RESPONSIVE_WIDTH)
      $('.SP-container').animate({ scrollTop: 0 }, SCROLL_SPEED);
    else $('html, body').animate({ scrollTop: $('.container').height() }, SCROLL_SPEED);
    return false;
  });
  HAMBURGER_MENU.forEach((menu) => {
    $(`.nav-${menu}`).click(() => {
      if ($(window).width() >= RESPONSIVE_WIDTH)
        $('.SP-container').animate(
          {
            scrollTop:
              $('.SP-container').scrollTop() + $(`.${menu}`).position().top,
          },
          SCROLL_SPEED
        );
      else
        $('html, body').animate(
          {
            scrollTop: $('.container').height() + $(`.${menu}`).position().top,
          },
          SCROLL_SPEED
        );
      return false;
    });
  });

  $(window).resize(function (){
    if (isNeedScroll) {
      isNeedScroll = false
      const currentScrollTop = $(document).scrollTop();
      console.log(currentScrollTop)
    }
  })

  const fishWaveMaxHeight = FISH_WAVE_SCROLL_END_AT - FISH_WAVE_SCROLL_START_AT
  const fishMove = () => {
    const windowWidth = $(window).width();
    if (windowWidth <= RESPONSIVE_WIDTH) {
      const scrolled = $(this).scrollTop()
      const fishEl = $('.fish-wave-right')
      if (scrolled >= FISH_WAVE_SCROLL_START_AT && scrolled <= FISH_WAVE_SCROLL_END_AT) {
        const percentage = (scrolled - FISH_WAVE_SCROLL_START_AT) / fishWaveMaxHeight
        const px = percentage * FISH_PX
        fishEl.css('left', `calc(${100 - Math.round(percentage * 100)}% - ${px}px)`);
      } else {
        fishEl.css('left', '100%');
      }

      const fishElSecond = $('.fish-wave-left')
      if (scrolled >= FISH_WAVE_SECOND_SCROLL_START_AT && scrolled <= FISH_WAVE_SECOND_SCROLL_END_AT) {
        const percentage = (scrolled - FISH_WAVE_SECOND_SCROLL_START_AT) / fishWaveMaxHeight
        const px = percentage * FISH_PX
        fishElSecond.css('right', `calc(${100 - Math.round(percentage * 100)}% - ${px}px)`);
      } else {
        fishElSecond.css('right', '100%');
      }

    }
  }
  $(window).on('scroll', fishMove);

  function HandleProgressCircle() {
    if ($(window).width() >= RESPONSIVE_WIDTH) {
      var SPContainer = $('.SP-container');
      var SPHeight = SPContainer.prop('scrollHeight');
      var scrollable = SPHeight - SPContainer.innerHeight();
      var progressEl = $('.progress-circle');
      var per = `${Math.floor((SPContainer.scrollTop() / scrollable) * 100)}%`;
      progressEl.css('top', per);
    }
  }
  HandleProgressCircle()
  $('.SP-container').on('scroll', HandleProgressCircle);
  $(window).resize(HandleProgressCircle);

  $('.SP-container').scroll(function () {
    fadeAnime();
    var SPContainer = $('.SP-container');
    const value = $('.fadeUpTrigger')
    $('.fadeUpTrigger').each(function (index, tag) {
      initFade(SPContainer, tag);
    });
  });
  initFade($('.SP-container'), document.getElementsByClassName('fadeUpTrigger')[0]);
});

function initFade(SPContainer, tag) {
  if ($(window).width() >= RESPONSIVE_WIDTH) {
    var elemPos = tag.offsetTop;
    var scroll = SPContainer.scrollTop();
    var containerHeight = SPContainer.height();
    if (scroll >= elemPos - containerHeight) {
      tag.classList.add('fadeUp');
    } else {
      tag.classList.remove('fadeUp');
    }
  }
}
