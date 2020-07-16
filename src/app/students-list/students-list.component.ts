import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
// api link https://api.npoint.io/c44517f1856b916aa825
  studentData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://api.npoint.io/c44517f1856b916aa825').subscribe(data => {
            this.studentData = data;
        });
  }

}
