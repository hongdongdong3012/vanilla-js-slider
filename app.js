const slider = document.getElementById('slider'),
      sliderItems = document.getElementById('slides'),
      prev = document.getElementById('prev'),
      next = document.getElementById('next');

slider(slider, sliderItems, prev, next);

function slider(wrapper, items, prev, next) {
  let posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementByClassNaame('slide'),
      slideLength = slides.length,
      slideSize = items.getElementByClassNaame('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slideLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;

  //clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

}