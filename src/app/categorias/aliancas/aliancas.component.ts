import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aliancas',
  templateUrl: './aliancas.component.html',
  styleUrls: ['./aliancas.component.css']
})
export class AliancasComponent implements OnInit {
itens:any=[
  {
        pathImage: 'assets/Aliancas/Aliaça de Prata abaulada.jpg',
            name: ' Aliança de Prata abaulada ' ,
},
{
        pathImage: 'assets/Aliancas/Aliança banhada a Ouro.jpg',
            name: ' Aliança banhada a Ouro ' ,
},
{
        pathImage: 'assets/Aliancas/Aliança de Ouro 8mm.jpg',
            name: ' Aliança de Ouro 8mm ' ,
},
{
        pathImage: 'assets/Aliancas/Aliança de Ouro Cravejada.jpg',
            name: ' Aliança de Ouro Cravejada ' ,
},
{
        pathImage: 'assets/Aliancas/Aliança de Ouro jateada.jpg',
            name: ' Aliança de Ouro jateada ' ,
},
{
        pathImage: 'assets/Aliancas/Aliança de Ouro.jpg',
            name: ' Aliança de Ouro ' ,
},
{
        pathImage: 'assets/Aliancas/Aliança de Prata 950.jpg',
            name: ' Aliança de Prata 950 ' ,
},
{
        pathImage: 'assets/Aliancas/Aliança de Prata com Coração.jpg',
            name: ' Aliança de Prata com Coração ' ,
},
{
        pathImage: 'assets/Aliancas/Aliança de Prata Diamantada.jpg',
            name: ' Aliança de Prata Diamantada ' ,
},
{
        pathImage: 'assets/Aliancas/Aliança Ouro 18K.jpg',
            name: ' Aliança de Ouro 18K ' ,
},
]
  constructor() { }

  ngOnInit(): void {
  }

}
