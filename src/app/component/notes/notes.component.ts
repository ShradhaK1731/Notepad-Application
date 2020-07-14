import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public value = '';
  constructor(public routerService: Router,
              public http: HttpClient) {
   }

  ngOnInit(): void {
  }

  onSaveClick(event) {
    const blob = new Blob([this.value],{
      type: 'text/plain;base64'
  });
   saveAs(blob, '.txt');
  }

  onLockClick(event) {
    this.routerService.navigate(['/pass']);
  }

  public valueChange(value){
    this.value = value;
}
}
