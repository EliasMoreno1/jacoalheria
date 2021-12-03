import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piercings',
  templateUrl: './piercings.component.html',
  styleUrls: ['./piercings.component.css']
})
export class PiercingsComponent implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Piercings/Piercing Argola de furo.jpg',
          name: ' Piercing Argola de furo ' ,
},
{
      pathImage: 'assets/Piercings/Piercing de Ouro 18K Nariz.jpg',
          name: ' Piercing de Ouro 18K Nariz ' ,
},
{
      pathImage: 'assets/Piercings/Piercing de Ouro 18K Orelha.jpg',
          name: ' Piercing de Ouro 18K Orelha ' ,
},
{
      pathImage: 'assets/Piercings/Piercing de Ouro 18K Trágus.jpg',
          name: ' Piercing de Ouro 18K Trágus ' ,
},
{
      pathImage: 'assets/Piercings/Piercing de Ouro 18K Umbigo.png',
          name: ' Piercing de Ouro 18K Umbigo ' ,
},
{
      pathImage: 'assets/Piercings/Piercing de Prata 925 Orelha.jpg',
          name: ' Piercing de Prata 925 Orelha ' ,
},
{
      pathImage: 'assets/Piercings/Piercing de Prata Umbigo.jpg',
          name: ' Piercing de Prata Umbigo ' ,
},
{
      pathImage: 'assets/Piercings/Piercing Folheado Nariz.png',
          name: ' Piercing Folheado Nariz ' ,
},
{
      pathImage: 'assets/Piercings/Piercing Hélix Prata 925.jpg',
          name: ' Piercing Hélix Prata 925 ' ,
},
{
      pathImage: 'assets/Piercings/Piercing Prata 925 Septo.png',
          name: ' Piercing Prata 925 Septo ' ,
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
