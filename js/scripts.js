// vue
let vm = new Vue({
    el: ".container",
    data: {
        active: "qr"
    },
    methods: {
        navActive: function (item) {
            this.active = item
        },
        rollToTop: function () {
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth"
            })
        }
    }
});

// pure js
function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

var options = {
    text: "document.getElementById(qrcontents).innerText"
}

new QRCode(document.getElementById("qrcode"), options);