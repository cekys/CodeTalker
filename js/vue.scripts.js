let vm = new Vue({
    el: ".container",
    data: {
        active: "home"
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