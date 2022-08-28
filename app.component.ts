import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
  numone=5;
  data:any=[ 1,2,3,4 ];
  arr:any[]=[]
  addTask(str:any){
     console.log("clicked",str)
    this.arr.push({id:Date.now(),taskname:str})
    console.log(this.arr)
  }
  removetask(id:any){
    this.arr=this.arr.filter(function(elem){
      return(elem.id!==id)
    })
    console.log(id)
  }
}
