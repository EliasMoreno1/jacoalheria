import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aneis',
  templateUrl: './aneis.component.html',
  styleUrls: ['./aneis.component.css']
})
export class AneisComponent implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Aneis/Anel casal Noite Estrelada.jpg',
          name: ' Anel casal Noite Estelada ' ,
},
{
      pathImage: 'assets/Aneis/Anel chuveiro Coração.jpg',
          name: ' Anel chuveiro Coração ' ,
},
{
      pathImage: 'assets/Aneis/Anel de Ouro 10K.jpg',
          name: ' Anel de Ouro 10K ' ,
},
{
      pathImage: 'assets/Aneis/Anel de Ouro 18K com Diamantes.jpg',
          name: ' Anel de Ouro 18K com Diamantes ' ,
},
{
      pathImage: 'assets/Aneis/Anel de Ouro 18K Zirkonicas.jpg',
          name: ' Anel de Ouro 18K Zirkonicas ' ,
},
{
      pathImage: 'assets/Aneis/Anel de Ouro 18K.png',
          name: ' Anel de Ouro 18K ' ,
},
{
      pathImage: 'assets/Aneis/Anel de Prata 925.jpg',
          name: ' Anel de Prata 925 ' ,
},
{
      pathImage: 'assets/Aneis/Anel de Prata banhado em ouro Rose.jpg',
          name: ' Anel de Prata banhado em ouro Rose ' ,
},
{
      pathImage: 'assets/Aneis/Anel de Prata Coração vazado.jpg',
          name: ' Anel de Prata Coração vazado ' ,
},
{
      pathImage: 'assets/Aneis/Anel de prata Solitário com Zirkonia.jpg',
          name: ' Anel de Prata Solitário com Zirkonia ' ,
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
