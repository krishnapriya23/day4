import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singlecomponent',
  templateUrl: './singlecomponent.component.html',
  styleUrls: ['./singlecomponent.component.css']
})
export class SinglecomponentComponent {
  single:any
  constructor(private District:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let singleDataArray = this.District.getData();

    this.single = singleDataArray.filter(d =>d.name === pageId)
    console.log(this.single);
  }

}
