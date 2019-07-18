import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

const SKILL = [
  {
    label: 'Angular',
    value: 10
  },
  {
    label: 'Vue/Nuxt.js',
    value: 9
  },
  {
    label: 'React/Next.js',
    value: 8
  },
  {
    label: 'Firebase',
    value: 10
  },
  {
    label: 'HTML/CSS/JS',
    value: 10
  },
  {
    label: 'Speed',
    value: 10
  },
  {
    label: 'Node.js',
    value: 8
  },
  {
    label: 'management',
    value: 7
  },
  {
    label: 'Design',
    value: 6
  },
  {
    label: 'Flutter',
    value: 2
  },
  {
    label: 'AI',
    value: 1
  },
  {
    label: 'Swift/Kotlin',
    value: 1
  },
];

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss']
})
export class SkillChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          maxBarThickness: 40,
          ticks: {
            fontColor: '#38839799'
          }
        }
      ]
    },
    legend: {
      display: false
    },
    layout: {
      padding: {
        right: 24
      }
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: 'rgba(56, 131, 151, 0.38)'
      }
    }
  };
  public barChartLabels: Label[] = SKILL.map(skill => skill.label);
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    {
      data: SKILL.map(skill => skill.value),
      label: 'スキル',
      backgroundColor: 'rgba(56, 131, 151, 0.6)'
    }
  ];

  constructor() {}

  ngOnInit() {}

  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
