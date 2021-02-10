// Slider Carousel
var imageCollection = document.getElementsByClassName("mySlides"); // image collection
var dots = document.getElementsByClassName("demo");
var total = imageCollection.length;
var dots_total = dots.length;
var start = 0;
var SliderDesktop = /** @class */ (function () {
    function SliderDesktop() {
        var _this = this;
        this.plus = function (n) {
            _this.show(_this.slideIndex += n, start += n);
        };
        this.currentDiv = function (n) { return _this.show(_this.slideIndex = n); };
        this.show = function (n, k) {
            if (k === void 0) { k = 0; }
            var i;
            if (n > total) {
                start--;
                _this.slideIndex--;
                return;
            }
            if (k < 0) {
                start++;
                _this.slideIndex++;
                return;
            }
            // all not visible
            for (i = 0; i < total; i++) {
                imageCollection[i].style.opacity = 0;
                imageCollection[i].style.position = 'absolute';
            }
            for (i = k; i < _this.slideIndex; i++) {
                imageCollection[i].style.opacity = 1;
                imageCollection[i].style.position = 'static';
            }
        };
        this.slideIndex = 3;
    }
    return SliderDesktop;
}());
var SliderMobile = /** @class */ (function () {
    function SliderMobile() {
        var _this = this;
        this.plus = function (n) {
            _this.show(_this.slideIndex += n);
        };
        this.currentDiv = function (n) { return _this.show(_this.slideIndex = n); };
        this.show = function (n) {
            var i;
            if (n > total) {
                _this.slideIndex = 1;
            }
            if (n < 1) {
                _this.slideIndex = total;
            }
            for (i = 0; i < total; i++) {
                imageCollection[i].style.display = "none";
            }
            for (i = 0; i < dots_total; i++) {
                dots[i].className = dots[i].className.replace(" w3-indigo", "");
            }
            imageCollection[_this.slideIndex - 1].style.display = "block";
            dots[_this.slideIndex - 1].className += " w3-indigo";
        };
        this.slideIndex = 1;
    }
    return SliderMobile;
}());
var SliderFabrique = /** @class */ (function () {
    function SliderFabrique() {
        this.slideIndex = SliderFabrique.isMobile ? 1 : 3;
    }
    SliderFabrique.prototype.init = function () {
        return SliderFabrique.isMobile ? new SliderMobile() : new SliderDesktop();
    };
    SliderFabrique.isMobile = window.screen.width < 650;
    return SliderFabrique;
}());
var slider = new SliderFabrique().init();
// init the slider
slider.show(1);
