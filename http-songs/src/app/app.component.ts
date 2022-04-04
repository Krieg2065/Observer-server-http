import { Component, Input } from '@angular/core';
import { Album } from './album.model';
import { AlbumList } from './albumList.model';
import { Song } from './song.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-songs';
  selectedOption : string;
  albums = AlbumList ;
  selectedAlbum: Album = AlbumList[0];
  songList: Song[];  //Questo vettore va passato al componente sonList
  obsSongs : Observable<Song[]>;

  constructor(public http : HttpClient){

  }
  onClick(t: HTMLInputElement  ,d : HTMLInputElement, l :HTMLInputElement ) : boolean
  {
    this.selectedAlbum = AlbumList.find((album: Album) => album.title == this.selectedOption);
    this.songList.push(new Song(this.selectedAlbum, new Date(d.value), Number(l.value), t.value));
    //Dopo aver aggiunto la canzone azzero tutti i campi
    t.value ="";
    d.value ="";
    l.value="";
    this.selectedOption = undefined;
    return false;
  }


  onChange()
  {
    this.selectedAlbum = AlbumList.find((album: Album) => album.title == this.selectedOption);
  }
}
