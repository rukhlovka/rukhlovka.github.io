let data = [
    {
        id: 'ukrainians',
        title: 'Ukrainians',
        text: 'Ukrainians, details',
        img: 'img/ukrainians.png'
    },
    {
        id: 'fox',
        title: 'Fox cosmonaut',
        text: 'portrait of a fox cosmonaut, space sky with stars on the background, highly detailed, digital painting, modern style',
        img: 'img/fox-cosmonaut.png'
    },
    {
        id: 'cow',
        title: 'Cow cosmonaut',
        text: 'portrait of a cow cosmonaut, space sky with stars on the background, highly detailed, digital painting',
        img: 'img/cow-cosmonaut.png'
    },
    {
        id: 'cyberpunk',
        title: 'Cyberpunk',
        text: 'cyberpunk style, man\'s portrait',
        img: 'img/cyberpunk.png'
    },
    {
        id: 'apocalypse',
        title: 'Apocalypse',
        text: ' The city after the apocalypse',
        img: 'img/apocalypse.png'
    }
]
let url = 'img/ukrainians.png';

function takeData({ target }) {

    let thisUrl, thisTitle, thisText;

    data.forEach((item) => {
        if (item.id === target.getAttribute('id')) {
            thisUrl = item.img;
            thisTitle = item.title;
            thisText = item.text;
        }
    })

    document.querySelector(".main-img-this")
        .setAttribute('src', thisUrl);

    document.querySelector(".main-text-span")
        .textContent = thisText;

    document.querySelector(".main-title")
        .textContent = thisTitle;
    document.querySelector(".hidden")
        .setAttribute('class', 'keywords');
};
function more(event) {

    if (document.querySelector(".menu-ul").getAttribute('class') == 'menu-ul') {
        document.querySelector(".menu-ul")
            .setAttribute('class', 'menu-ul open');
    } else {
        document.querySelector(".menu-ul")
            .setAttribute('class', 'menu-ul');
    };
};
const navigation = document.querySelector('.menu-ul');

navigation.addEventListener("click", takeData);

document.querySelector('.more')
    .addEventListener("click", more);
