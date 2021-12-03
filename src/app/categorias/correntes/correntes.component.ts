import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correntes',
  templateUrl: './correntes.component.html',
  styleUrls: ['./correntes.component.css']
})
export class CorrentesComponent implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Correntes/Corrente de Ouro 18K feminina.jpg',
          name: ' Corrente de Ouro 18K feminina ' ,
},
{
      pathImage: 'assets/Correntes/Corrente de Ouro 18K fina.png',
          name: ' Corrente de Ouro 18K fina ' ,
},
{
      pathImage: 'assets/Correntes/Corrente de Ouro 18K veneziana.jpg',
          name: ' Corrente de Ouro 18K veneziana ' ,
},
{
      pathImage: 'assets/Correntes/Corrente de Ouro Branco 18K.jpg',
          name: ' Corrente de Ouro Branco 18K ' ,
},
{
      pathImage: 'assets/Correntes/Corrente de Prata 925 rose.png',
          name: ' Corrente de Prata 925 rose ' ,
},
{
      pathImage: 'assets/Correntes/Corrente de Prata 925.jpg',
          name: ' Corrente de Prata 925 ' ,
},
{
      pathImage: 'assets/Correntes/Corrente de Prata 950.jpg',
          name: ' Corrente de Prata 950 ' ,
},
{
      pathImage: 'assets/Correntes/Corrente de Prata elo Portugues.jpg',
          name: ' Corrente de Prata elo Portugues ' ,
},
{
      pathImage: 'assets/Correntes/Corrente de Prata elos e bolinhas.jpg',
          name: ' Corrente de Prata elos e bolinhas ' ,
},
{
      pathImage: 'assets/Correntes/Corrente de Prata Grumet 925.jpg',
          name: ' Corrente de Prata Grumet 925 ' ,
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
