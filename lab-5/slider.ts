// Slider Carousel

const imageCollection: HTMLCollectionOf<any> = document.getElementsByClassName("mySlides"); // image collection
const dots: HTMLCollection = document.getElementsByClassName("demo");
const total: number = imageCollection.length;
const dots_total: number = dots.length;
let start: number = 0;

interface Slider {
  slideIndex: number;

  plus(n: number): void;

  show(n: number, k?: number): void;
}

class SliderDesktop implements Slider {
  slideIndex: number;

  constructor() {
    this.slideIndex = 3;
  }

  plus = (n: number): void => {
    this.show(this.slideIndex += n, start += n);
  };

  currentDiv = (n): void => this.show(this.slideIndex = n);

  show = (n: number, k: number = 0): void => {
    let i;
    if (n > total) {
      start--;
      this.slideIndex--;
      return
    }
    if (k < 0) {
      start++;
      this.slideIndex++;
      return
    }

    // all not visible
    for (i = 0; i < total; i++) {
      imageCollection[i].style.opacity = 0;
      imageCollection[i].style.position = 'absolute';
    }

    for (i = k; i < this.slideIndex; i++) {
      imageCollection[i].style.opacity = 1;
      imageCollection[i].style.position = 'static';
    }
  };
}

class SliderMobile implements Slider {
  slideIndex: number;

  constructor() {
    this.slideIndex = 1;
  }

  plus = (n: number): void => {
    this.show(this.slideIndex += n);
  };

  currentDiv = (n) => this.show(this.slideIndex = n);

  show = (n: number): void => {
    let i;
    if (n > total) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = total
    }
    for (i = 0; i < total; i++) {
      imageCollection[i].style.display = "none";
    }
    for (i = 0; i < dots_total; i++) {
      dots[i].className = dots[i].className.replace(" w3-indigo", "");
    }
    imageCollection[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " w3-indigo";
  };

}

class SliderFabrique {
  slideIndex: number;
  static isMobile: boolean = window.screen.width < 650;

  constructor() {
    this.slideIndex = SliderFabrique.isMobile ? 1 : 3;
  }

  init() {
    return SliderFabrique.isMobile ? new SliderMobile() : new SliderDesktop();
  }
}

let slider = new SliderFabrique().init();

// init the slider
slider.show(1);
