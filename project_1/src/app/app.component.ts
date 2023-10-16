import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringToEvalute:string='';

  takeInput(num:string){
    this.stringToEvalute =this.stringToEvalute +num;
    console.log(this.stringToEvalute);
    

  }
  evaluateResult(){
    if(this.stringToEvalute != ''){
      this.stringToEvalute = eval(this.stringToEvalute);
    }
    
   
    
  }
  resetInput(){
    this.stringToEvalute = '';
  }
}
