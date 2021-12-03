import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brincos',
  templateUrl: './brincos.component.html',
  styleUrls: ['./brincos.component.css']
})
export class BrincosComponent implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Brincos/Brinco de Ouro 10K.jpg',
          name: ' Brinco de Ouro 10K ' ,
},
{
      pathImage: 'assets/Brincos/Brinco de Ouro 18K com Zircônia.jpg',
          name: ' Brinco de Ouro 18K com Zircônia ' ,
},
{
      pathImage: 'assets/Brincos/Brinco de Ouro 18K concha.jpg',
          name: ' Brinco de Ouro 18K concha ' ,
},
{
      pathImage: 'assets/Brincos/Brinco de Ouro 18K.jpg',
          name: ' Brinco de Ouro 18K ' ,
},
{
      pathImage: 'assets/Brincos/Brinco de Ouro Branco.jpg',
          name: ' Brinco de Ouro Branco ' ,
},
{
      pathImage: 'assets/Brincos/Brinco de Prata 925.jpg',
          name: ' Brinco de Prata 925 ' ,
},
{
      pathImage: 'assets/Brincos/Brinco de Prata bola 8mm.jpg',
          name: ' Brinco de Prata bola 8mm ' ,
},
{
      pathImage: 'assets/Brincos/Brinco de Prata cravejado.jpg',
          name: ' Brinco de Prata cravejado ' ,
},
{
      pathImage: 'assets/Brincos/Brinco de Prata solitário 4mm.jpg',
          name: ' Brinco de Prata solitário 4mm ' ,
},
{
      pathImage: 'assets/Brincos/Brincos de Prata 18mm.jpg',
          name: ' Brinco de Prata 18mm ' ,
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
