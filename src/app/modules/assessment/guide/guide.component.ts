import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  guides: string[] = [
    'Time-guide',
    'HowTo-guide',
    'Back-guide',
    'BackRule-guide',
    'SwipeRight-guide',
    'SwipeLeft-guide',
    'NoAnswer-guide',
    'AnswerHonestly-guide',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
