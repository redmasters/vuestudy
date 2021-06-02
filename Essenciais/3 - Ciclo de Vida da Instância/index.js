var app = new Vue({
    el: '#app',
    data: {
        a: 1
    },
    created: function() {
        // 'this' aponta para a instância
        console.log('a é: ' + this.a)
    }
});