import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public tempTitle   = '';
  public tempContent = '';
  public isSelected  = false;
  public lastEditIndex = 0;

  public NoteCollection = [
    {
        title:'',
        content: '',
    }
  ];
  
  public SaveButton(){
    if(this.tempTitle.length > 5 && this.tempContent.length > 7){
    let note = {title: this.tempTitle, content: this.tempContent}
    this.NoteCollection.push(note);
    this.ClearTempData();
    }
  }

  public SaveEdit(){
    this.NoteCollection[this.lastEditIndex].title = this.tempTitle;
    this.NoteCollection[this.lastEditIndex].content = this.tempContent;
    this.isSelected = false;
    this.ClearTempData();
  }

  public DeleteNote(){
    delete this.NoteCollection[this.lastEditIndex]
    this.isSelected = false;
  }

  public NoteSelect(index:number){
    this.lastEditIndex = index;
    this.isSelected = true;
    this.tempTitle = this.NoteCollection[index].title;
    this.tempContent = this.NoteCollection[index].content;
  }

  private ClearTempData(){
    this.tempTitle   = '';
    this.tempContent = '';
  }

}
