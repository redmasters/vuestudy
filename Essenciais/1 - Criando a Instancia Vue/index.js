var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});


app.message = 'Changed Message';

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
})


var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Ola Vue'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Ola Vue!'
    }
})

// Define um novo componente chamado todo-tem
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetais'},
            { id: 1, text: 'Queijo'},
            { id: 2, text: 'Qualquer outra coisa'},
        ]
    }
})