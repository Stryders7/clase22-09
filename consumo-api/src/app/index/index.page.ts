import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private rmService: StateService) { }

  ngOnInit() {
    this.rmService.getCharacters().subscribe(
      (data)=>{
        console.log(data);
        localStorage.setItem('characters', JSON.stringify(data.result));
      }
    )
    this.rmService.getLocation().subscribe(
      (location)=>{
        console.log(location);
      }
    )
  }
  getCharacters(){
    const data = localStorage.getItem('characters');
    const result = JSON.parse(data);
    return result;
  }

}
