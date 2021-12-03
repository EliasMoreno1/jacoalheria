import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-argolas',
  templateUrl: './argolas.component.html',
  styleUrls: ['./argolas.component.css']
})
export class ArgolasComponent implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Argolas/Argola Africana em Ouro 18K.jpg',
          name: ' Argola Africana em Ouro 18K ' ,
},
{
      pathImage: 'assets/Argolas/Argola de Prata 925.jpg',
          name: ' Argola de Prata 925 ' ,
},
{
      pathImage: 'assets/Argolas/Argola de Prata grossa sólida 925.jpg',
          name: ' Argola de Prata grossa sólida 925 ' ,
},
{
      pathImage: 'assets/Argolas/Argola de Prata trabalhada.jpg',
          name: ' Argola de Prata trabalhada ' ,
},
{
      pathImage: 'assets/Argolas/Argola em Ouro Rose.jpg',
          name: ' Argola em Ouro Rose ' ,
},
{
      pathImage: 'assets/Argolas/Argola fina de Ouro.png',
          name: ' Argola fina de Ouro ' ,
},
{
      pathImage: 'assets/Argolas/Argola folheado Ouro - Prata.jpg',
          name: ' Argola folheado Ouro - Prata ' ,
},
{
      pathImage: 'assets/Argolas/Argola grande Prata 950.jpg',
          name: ' Argola grande Prata 950 ' ,
},
{
      pathImage: 'assets/Argolas/Argola redonda de 5mm.jpg',
          name: ' Argola redonda de 5mm ' ,
},
{
      pathImage: 'assets/Argolas/Argolas em Aço cirurgico.jpg',
          name: ' Argolas em Aço cirurgico ' ,
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
