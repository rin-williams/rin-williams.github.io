window.location.replace("https://rinwilliams.github.io/rinwilliams.github.io/index.html")

var imgLinks = document.querySelectorAll('.imglink');

imgLinks.forEach(function (imgLink) {
    imgLink.addEventListener('mouseover', function () {
        imgLinks.forEach(function (otherImgLink) {
            otherImgLink.style.animation = 'blurIn 1s ease forwards';
        });
        this.style.animation = '';
    });

    imgLink.addEventListener('mouseout', function () {
        imgLinks.forEach(function (otherImgLink) {
            otherImgLink.style.animation = 'blurOut 0.5s ease forwards';
        });
    }, 500);
});

var resources2 = document.querySelectorAll('.info-2 .info');
var currentSelectedResource2 = null;

resources2.forEach(function (resource2) {
    resource2.addEventListener('mouseover', function () {
        currentSelectedResource2 = this;
        resources2.forEach(function (otherResource2) {
            otherResource2.style.animation = 'blurIn 0.5s ease forwards';
        });

        this.style.animation = '';
    });

    resource2.addEventListener('mouseout', function () {
        resources2.forEach(function (otherResource2) {
            otherResource2.style.animation = 'blurOut 0.25s ease forwards';
            currentSelectedResource2.style.animation = 'hoverZoomOut 0.25s ease forwards';
        });
    }, 500);
});

var resources3 = document.querySelectorAll('.info-3 .info');
var currentSelectedResource3 = null;

resources3.forEach(function (resource3) {
    resource3.addEventListener('mouseover', function () {
        currentSelectedResource3 = this;
        resources3.forEach(function (otherResource3) {
            otherResource3.style.animation = 'blurIn 0.5s ease forwards';
        });

        this.style.animation = '';
    });

    resource3.addEventListener('mouseout', function () {
        resources3.forEach(function (otherResource3) {
            otherResource3.style.animation = 'blurOut 0.25s ease forwards';
            currentSelectedResource3.style.animation = 'hoverZoomOut 0.25s ease forwards';
        });
    }, 500);
});


var texts = document.querySelectorAll('span');

function randomFlicker() {
    return new Promise(resolve => {
        for (var i = 0; i < texts.length; i++) {
            texts[i].style.animation = '';
        }
        var randomIndex = Math.floor(Math.random() * texts.length);
        texts[randomIndex].style.animation = 'flicker 1s';
        setTimeout(resolve, 1000);
    });
}
async function callRandomFlicker() {
    await randomFlicker();
    var randomInterval = Math.random() * 3000;
    setTimeout(callRandomFlicker, randomInterval);
}
callRandomFlicker();

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    obj.style.width = obj.contentWindow.document.documentElement.scrollWidth + 'px';
}

window.addEventListener('scroll', function () {
    var buttons = document.querySelectorAll('.button');
    var navbarIcon = document.querySelector('.nav-button');

    if (window.scrollY < 300) {
        buttons.forEach(function (button) {
            button.style.display = 'flex';
        });
        navbarIcon.style.display = 'none';

    } else {
        buttons.forEach(function (button) {
            button.style.display = 'none';
        });
        navbarIcon.style.display = 'flex';
    }
});
