// vue
let vm = new Vue({
    el: ".container",
    data: {
        active: "aes"
    },
    methods: {
        navActive: function (item) {
            this.active = item
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

function rollToTop() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
}