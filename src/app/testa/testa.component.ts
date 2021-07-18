import { Component, OnInit } from '@angular/core';

function log( target: any,name: any,decriptor: any){
  console.log("Vad måste jag ha här uppe för att detta ska funka?")
decriptor.value.myVariable =" fsdfsdfdf" // Hur får jagh detta att funka?

}


@Component({
  selector: 'app-testa',
  templateUrl: './testa.component.html',
  styleUrls: ['./testa.component.css']
})
export class TestaComponent implements OnInit {
  myVariable = "Kan jag få in denna i hej funktionen på något sätt?"
  constructor() { this.hej() }

  ngOnInit(): void {
  }

  @log
  hej(){
    console.log("hej")
   this.myVariable = "testar"
   
  }

}
