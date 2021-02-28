const result = document.getElementById('result');
const trigForm = document.forms['trigonometric'];
const UNIT_MAP = {
    toRadian: false,
    grad: {
        placeholder: '0° < x < 90°',
        validation_message: 'Введіть значення в межах від 0° до 90°',
        min: 0,
        max: 90
    },
    radian: {
        placeholder: '360° = 2π',
        validation_message: 'Введіть додатне число',
        min: 0,
        max: Number.MAX_SAFE_INTEGER
    },
    arguments: function (value) {
        return this.toRadian ? Math.radians(value) : value;
    }
};

/*Extend Math family with degreesToRadians*/
Math.radians = degrees => degrees * Math.PI / 180;
Math.ctan = arg =>  1 / Math.tan(arg);

function setLogic({currentTarget: {value}}){

    if (!value) {
        throw new Error('no unit value provided');
    }

    const {placeholder, max, min, validation_message} = UNIT_MAP[value];

    for (let i = 0, elem = trigForm.elements; i < elem.length; i++) {
        if (elem[i].name === 'argument') {
            elem[i].placeholder = placeholder;
            elem[i].max = max;
            elem[i].min = min;
            elem[i].oninvalid = function(){
                this.setCustomValidity(validation_message);
            };
        }
    }

    UNIT_MAP.toRadian = value === 'grad';
}

function calculate(event) {
    const formData = new FormData(trigForm);
    const argument = formData.get('argument');
    const trig_function = formData.get('trig_function');

    if(!trigForm.checkValidity()){
        throw new Error('form not valid');
    }

    if (!argument) {
        throw new Error('invalid argument');
    }

    result.style.visibility = 'visible';
    result.innerText = Math[trig_function](UNIT_MAP.arguments(argument)).toFixed(2);

    event.preventDefault();
}
