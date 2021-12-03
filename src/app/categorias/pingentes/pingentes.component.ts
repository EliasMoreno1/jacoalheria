import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pingentes',
  templateUrl: './pingentes.component.html',
  styleUrls: ['./pingentes.component.css']
})
export class PingentesComponent implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Pingentes/Pingente de Ouro 18K coração.jpg',
          name: ' Pingente de Ouro 18K coração ' ,
},
{
      pathImage: 'assets/Pingentes/Pingente de Ouro Árvore da Vida.jpg',
          name: ' Pingente de Ouro Árvore da Vida ' ,
},
{
      pathImage: 'assets/Pingentes/Pingente de Ouro Branco Estrela.jpg',
          name: ' Piercing de Ouro Branco Estrela ' ,
},
{
      pathImage: 'assets/Pingentes/Pingente de Ouro Rose.jpg',
          name: ' Piercing de Ouro Rose ' ,
},
{
      pathImage: 'assets/Pingentes/Pingente de Prata 925 Elefante.jpg',
          name: ' Piercing de Prata 925 Elefante ' ,
},
{
      pathImage: 'assets/Pingentes/Pingente de Prata 925 São Jorge.jpg',
          name: ' Piercing de Prata 925 São Jorge ' ,
},
{
      pathImage: 'assets/Pingentes/Pingente de Prata Capacete Espartano.jpg',
          name: ' Piercing de Prata Capacete Espartano ' ,
},
{
      pathImage: 'assets/Pingentes/Pingente de Prata Cocar do Indio.jpg',
          name: ' Piercing de Prata Cocar do Indio ' ,
},
{
      pathImage: 'assets/Pingentes/Pingente de Prata Figa.jpg',
          name: ' Piercing de Prata Figa ' ,
},
{
      pathImage: 'assets/Pingentes/Pingente de Prata leve Medalha.jpg',
          name: ' Piercing de Prata leve Medalha ' ,
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
