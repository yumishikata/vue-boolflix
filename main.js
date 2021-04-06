var app = new Vue ({
    el:'#root',
    data: {
        cerca: '',
        films: []
    },
    methods: {
        search: function(){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=d04f615a69c6c05ddd2d3983ab546aee&query=' +this.cerca)
            .then(risultato => {
                this.films = risultato.data.results;
                console.log(this.films);
            })
        }
    },
    mounted() {

    }

})