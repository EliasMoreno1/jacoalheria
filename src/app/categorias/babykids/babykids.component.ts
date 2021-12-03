import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babykids',
  templateUrl: './babykids.component.html',
  styleUrls: ['./babykids.component.css']
})
export class BabykidsComponent implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Baby e Kids/Anel Infantil em Ouro 10K.jpg',
          name: ' Anel Infantil em Ouro 10K ' ,
},
{
      pathImage: 'assets/Baby e Kids/Anel Infantil Semijóia.jpg',
          name: ' Anel Infantil Semijóia ' ,
},
{
      pathImage: 'assets/Baby e Kids/Brinco Infantil em Ouro 18K.jpg',
          name: ' Brinco Infantil em Ouro 18K ' ,
},
{
      pathImage: 'assets/Baby e Kids/Brinco Infantil em Ouro Branco.jpg',
          name: ' Brinco Infantil em Ouro Branco ' ,
},
{
      pathImage: 'assets/Baby e Kids/Brinco Infantil em Ouro Rose.jpg',
          name: ' Brinco Infantil em Ouro Rose ' ,
},
{
      pathImage: 'assets/Baby e Kids/Brinco Infantil Semijóia.jpg',
          name: ' Brinco Infantil Semijóia ' ,
},
{
      pathImage: 'assets/Baby e Kids/Colar Infantil em Prata 925.jpg',
          name: ' Colar Infantil em Prata 925 ' ,
},
{
      pathImage: 'assets/Baby e Kids/Colar Infantil Semijóia.jpg',
          name: ' Colar Infantil Semijóia ' ,
},
{
      pathImage: 'assets/Baby e Kids/Pulseira Infantil em Ouro.jpg',
          name: ' Colar Infantil em Ouro ' ,
},
{
      pathImage: 'assets/Baby e Kids/Pulseira Rommanel Infantil.jpg',
          name: ' Pulseira Rommanel Infantil ' ,
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
