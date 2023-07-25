//-------------Menu------------//
function menu(x) {
    x.classList.toggle('change');
}

//--------------Real-time date update----------------//
function displayDate() {
    var currentDate = new Date();
    var options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    };
    var dateString = currentDate.toLocaleDateString(undefined, options);

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var timeString =
        hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + amPm;

    return dateString + ', ' + timeString;
}

setInterval(function () {
    let currentTime = document.getElementById('time');
    currentTime.innerHTML = displayDate();
}, 1000);

//----------------Search form activation-----------------//
function search(event) {
    event.preventDefault();

    let input = document.querySelector('#inputSearch');
    let city = document.querySelector('#cityName');
    let newCity = input.value;

    if (newCity.length > 5 && newCity.length < 12) {
        city.classList.remove('city');
        city.classList.add('m-font');
    } else if (newCity.length >= 12 && newCity.length < 18) {
        city.classList.remove('city');
        city.classList.add('sm-font');
    } else if (newCity.length >= 18) {
        city.classList.remove('city');
        city.classList.add('ex-sm-font');
    } else {
        city.classList.remove('sm-font');
        city.classList.remove('ex-sm-font');
        city.classList.add('city');
    }

    if (newCity.trim() !== '') {
        city.innerHTML = newCity;
    }

    input.value = '';
}

let searchEvent = document.querySelector('#searchButton');
searchEvent.addEventListener('click', search);

let inputSearch = document.querySelector('#inputSearch');
inputSearch.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search(event);
    }
});

// Convert temp

function convertToF(event) {
    event.preventDefault();
    let temp = document.querySelector('#temperature');
    temp.innerHTML = '71';
}
function convertToC(event) {
    event.preventDefault();
    let temp = document.querySelector('#temperature');
    temp.innerHTML = '22';
}

let fahrenheit = document.querySelector('#fahrenheit');
fahrenheit.addEventListener('click', convertToF);

let celsius = document.querySelector('#celsius');
celsius.addEventListener('click', convertToC);

// graph
