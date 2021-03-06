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
                this.films.forEach(element => {
                    element.vote_average = Math.ceil(parseInt(element.vote_average)/2);
                });
            })
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=d04f615a69c6c05ddd2d3983ab546aee&query=' +this.cerca)
            .then(risultato => {
                this.films = this.films.concat(risultato.data.results);
            })
    }
}

})