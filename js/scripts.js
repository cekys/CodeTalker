// vue js
let vm = new Vue({
    el: ".container-fluid",
    data: {
        active: "url"
    },
    methods: {
        navActive: function (item) {
            this.active = item
        }
    }
})

// pure js
function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

function rollToTop() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
}

//清除命令
function clearText(element) {
    element.value = "";
}

//绑定匿名函数调用 clearText(element)
document.getElementById("qr-clear-btn").addEventListener("click", function () {
    clearText(document.getElementById("qr-input-box"));
});


//QR code 模块
let options = {
    text: "qr code"
};
let qrcode = new QRCode(document.getElementById("qr-code"), options);

function QRGenerate() {
    let text = document.getElementById("qr-input-box").value;
    qrcode.makeCode(text);
}

//生成QRCode点击按钮绑定
document.getElementById("qr-btn").addEventListener("click", QRGenerate);

//URL 模块