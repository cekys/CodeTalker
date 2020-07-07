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

document.getElementById("url-clear-btn").addEventListener("click", function () {
    clearText(document.getElementById("url-input-box"));
});


//QR code 模块
let qrcode = new QRCode(document.getElementById("qr-code"));

function QRGenerate() {
    let text = document.getElementById("qr-input-box").value;
    qrcode.makeCode(text);
}

//生成QRCode点击按钮绑定
document.getElementById("qr-btn").addEventListener("click", QRGenerate);


//URL 模块
function urlEncode() {
    let box = document.getElementById("url-input-box");
    let encode = encodeURI(box.value);
    box.value = encode;
}

function urlDecode() {
    let box = document.getElementById("url-input-box");
    let decode = decodeURI(box.value);
    box.value = decode;
}

//加密url点击事件绑定
document.getElementById("url-encode-btn").addEventListener("click", urlEncode);
//解密url点击事件绑定
document.getElementById("url-decode-btn").addEventListener("click", urlDecode);