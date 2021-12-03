import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulseiras',
  templateUrl: './pulseiras.component.html',
  styleUrls: ['./pulseiras.component.css']
})
export class PulseirasComponent implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Pulseiras/Pukseira de Ouro 18K elo Portugues.jpg',
          name: ' Pulseira de Ouro 18K elo Portugues ' ,
},
{
      pathImage: 'assets/Pulseiras/Pulseira de Ouro 18k 20 cm.jpg',
          name: ' Pulseira de Ouro 18K 20 cm ' ,
},
{
      pathImage: 'assets/Pulseiras/Pulseira de Ouro 18K Romana.jpg',
          name: ' Pulseira de Ouro 18K Romana ' ,
},
{
      pathImage: 'assets/Pulseiras/Pulseira de Ouro pingentes Religiosos.jpg',
          name: ' Pulseira de Ouro pingentes Religiosos ' ,
},
{
      pathImage: 'assets/Pulseiras/Pulseira de Prata 925 com Zircônias.jpg',
          name: ' Pulseira de Prata 925 com Zircônicas ' ,
},
{
      pathImage: 'assets/Pulseiras/Pulseira de Prata 925 feminina.jpg',
          name: ' Pulseira de Prata 925 feminina ' ,
},
{
      pathImage: 'assets/Pulseiras/Pulseira de Prata 925.jpg',
          name: ' Pulseira de Prata 925 ' ,
},
{
      pathImage: 'assets/Pulseiras/Pulseira de Prata 950.jpg',
          name: ' Pulseira de Prata 950 ' ,
},
{
      pathImage: 'assets/Pulseiras/Pulseira de Prata bolinha e coração.jpg',
          name: ' Pulseira de Prata bolinha e coração ' ,
},
{
      pathImage: 'assets/Pulseiras/Pulseira em Ouro 18K malha em 6mm.png',
          name: ' Pulseira em Ouro 18K malha em 6mm ' ,
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
