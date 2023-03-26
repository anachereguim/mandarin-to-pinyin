import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Editor } from '../model/editor.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit{

  editor: Editor = {
    text: ''
  };
  pinyin = require("chinese-to-pinyin");
  constructor() { }

  ngOnInit(): void {
  }

  generatePDF(){
    // this.document.html(content.innerHTML);
    let document = new jsPDF;
    document.addFont('courier', 'courier', 'normal');
    document.setFont('courier');
    document.text(this.pinyin(this.editor.text), 15, 30);
    document.text((this.editor.text),20,40);
    document.save("teste.pdf");
  }
}
