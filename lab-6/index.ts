const first: HTMLElement = document.getElementById('row-first');
const allCollection: HTMLAllCollection = document.all;
const second: Element | any = allCollection.namedItem('row-second');
const third: HTMLElement = document.getElementById('row-third');
const fourth: HTMLElement = document.getElementById('row-fourth');
const group1: Array<HTMLElement> = [first, third];

let toggleFirstNThird = (): void => {
  group1.forEach((x) => {
    if (x.className.indexOf("w3-yellow") == -1) {
      x.className = x.className.replace("w3-blue", "w3-yellow");
    } else {
      x.className = x.className.replace("w3-yellow", "w3-blue");
    }
  });
};

let toggleSecond = (): void => {
  const classes: DOMTokenList = second.classList;

  if (classes.contains('w3-text-red')) {
    classes.remove('w3-text-red');
    classes.add('w3-green');
  } else {
    classes.add('w3-text-red');
    classes.remove('w3-green');
  }
};

let zoomFourth = (): void => {
  const classes: DOMTokenList = fourth.classList;

  if (!classes.contains('zoom')){
    classes.add('zoom');
    classes.add('w3-text-indigo')
  } else {
    classes.remove('zoom');
    classes.remove('w3-text-indigo')
  }
};
