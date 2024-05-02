class Calebe {
    constructor (site){
        this.site = site;
    }

    exibirSite (){
        window.open(this.site);
    }
}

var novoCalebe = new Calebe ("https://www.youtube.com/@Beaguilera");
novoCalebe.exibirSite();
