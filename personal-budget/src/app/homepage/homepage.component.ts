import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chart} from 'chart.js';
@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public dataSource = {
    datasets: [{
        data: [],
        backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
            "rgba(255,221,50,0.2)",
            "rgba(60,186,159,0.2)",
            "rgba(0,0,0,0.2)",
            "rgba(193,46,12,0.2)"
        ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: []
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for(var i  = 0;i<res.myBudget.length;i++){
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
    }
      this.createChart();
      // createD3PieChart();
    })
  }

  createChart(){
    // var ctx = document.getElementById("myChart").getContext("2d");
    var ctx = document.getElementById("myChart");
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: this.dataSource
    });
}

}
