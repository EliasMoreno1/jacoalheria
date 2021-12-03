import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colares',
  templateUrl: './colares.component.html',
  styleUrls: ['./colares.component.css']
})
export class ColaresComponent implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Colares/Colar de Ouro 18K com olho Grego.jpg',
          name: ' Colar de Ouro 18K com olho Grego ' ,
},
{
      pathImage: 'assets/Colares/Colar de Ouro 18K.jpg',
          name: ' Colar de Ouro 18K ' ,
},
{
      pathImage: 'assets/Colares/Colar de Ouro Branco 18K.jpg',
          name: ' Colar de Ouro Branco 18K ' ,
},
{
      pathImage: 'assets/Colares/Colar de Ouro Rose.jpg',
          name: ' Colar de Ouro Rose ' ,
},
{
      pathImage: 'assets/Colares/Colar de Prata 925.jpg',
          name: ' Colar de Prata 925 ' ,
},
{
      pathImage: 'assets/Colares/Colar de Prata 950 coração.jpg',
          name: ' Colar de Prata 950 coração ' ,
},
{
      pathImage: 'assets/Colares/Colar de Prata Elo.jpg',
          name: ' Colar de Prata Elo ' ,
},
{
      pathImage: 'assets/Colares/Colar longo de Ouro.jpg',
          name: ' Colar longo de Ouro ' ,
},
{
      pathImage: 'assets/Colares/Colar Ouro velho 3 voltas.jpg',
          name: ' Colar de Ouro velho 3 voltas ' ,
},
{
      pathImage: 'assets/Colares/Colar Riviére em Ouro Branco.png',
          name: ' Colar Riviére em Ouro Branco ' ,
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
