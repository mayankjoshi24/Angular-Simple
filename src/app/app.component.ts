import { Component } from '@angular/core';
import { Data } from "./app";
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name: string = '';
  description: string = '';
  status: string = '';

  halo: Array<Data> = [];

  showHide: false;
  isValid: true;

  isValidForm() {

    return this.isValid;
  }

  showResult() {
    this.halo.push(new Data(this.name, this.description, this.status))
    
    
  }

  onClose() {

    this.halo.pop()


  }

  onEdit() {
      
      this.halo.pop()
      this.halo.push(new Data(this.name, this.description, this.status))
  }


}
