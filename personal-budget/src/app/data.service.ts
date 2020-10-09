import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataSource = {
    datasets: [{
        data: [],
        backgroundColor: [
            '#3e95cd',
            '#8e5ea2',
            '#3cba9f',
            '#e8c3b9',
            '#c45850',
            'rgba(255,221,50,0.2)',
            'rgba(60,186,159,0.2)',
            'rgba(0,0,0,0.2)',
            'rgba(193,46,12,0.2)'
        ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: []
  };
  constructor() { }
}
