<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>


var app = new Vue(({
    el: "#app",
    data: {
        message: 'Hello',
    }

})

var watch = new Vue({
    el: '#watch',
    data: {
        question: '',
        resposta: 'Digita ae',
    },
    watch: {
        question: function(novaQuest, oldQuest) {
            this.resposta = 'Esperando vc digitar....'
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') === -1) {
                this.resposta = 'Perguntas teem interrogação.'
                return
            }
            this.resposta = 'Pensando...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.resposta = response.data.resposta === 'yes' ? 'Sim.' :
                        response.data.resposta === 'no' ? 'Não.' : 'Talvez!'
                })
        }
    }
})