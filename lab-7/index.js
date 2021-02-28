const endpoint = 'http://localhost:8080';
const variant = 5;
const modal = document.getElementById('id01');
const result = document.getElementById('result');
const table = document.getElementsByTagName("table");
const td = table[0].getElementsByTagName("td");
const colorPicker = document.getElementById('favcolor');

td[variant - 1]
    .addEventListener('mouseover', () => {
        [...td].forEach((x, y) => {
            if (y !== variant - 1) {
                x.classList.add('w3-indigo');
            }
        })
    });

td[variant - 1]
    .addEventListener('mouseout', () => {
        [...td].forEach((x, y) => {
            if (y !== variant - 1) {
                x.classList.remove('w3-indigo');
            }
        })
    });

td[variant - 1].onclick = (event) => {
    event.preventDefault();
    colorPicker.click();
};


colorPicker.addEventListener('change', function(){
    [...td].forEach((x, y) => {
        if (y !== variant - 1) {
            x.style.background = colorPicker.value;
        }
    })
});

let submitForm = (event) => {
    event.preventDefault();

    /*form data to json*/
    let data = Object.fromEntries(new FormData(document.forms['student']));

    postData(`${endpoint}/student`, data)
        .then((data) => {
            if (data) {
                console.log(data);
                result.innerHTML = data.message;
                modal.style.display = 'block';
            }
        }).catch((e) => {
            console.log(e.message)
        }
    )
};

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            /*'Content-Type': 'application/x-www-form-urlencoded',*/
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return await response.json(); // parses JSON response into native JavaScript objects
}
