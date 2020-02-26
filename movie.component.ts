import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  {
 public citie = ['Hydarabad', 'Bangalore', 'Pune'];
 public area = [];
 public selCity = '';
 public areaH = ['AmeerPeth', 'Secunderabad'];
 public areaB = ['Magadi', 'Vijayangar'];
 public areaP = ['Kothrud', 'Swarget'];

public changeCity(){
  if (this.selCity == 'Hydarabad') {
    this.area = this.areaH;
  }
  if (this.selCity == 'Bangalore') {
    this.area = this.areaB;
  }
  if (this.selCity == 'Pune') {
    this.area = this.areaP;
  }
};

public movie = [];
public selArea = '';
public movieH = ['Iron Man', 'Bat Man'];
public movieB = ['Thor', 'DeadPool'];
public movieP = ['Avengers', 'Joker'];

public changeArea(){
  if (this.selArea == 'AmeerPeth' || this.selArea == 'Secunderabad' ) {
    this.movie = this.movieH;
  }
  if (this.selArea == 'Magadi' || this.selArea == 'Vijayangar') {
    this.movie = this.movieB;
  }
  if (this.selArea == 'Kothrud' || this.selArea == 'Swarget') {
    this.movie = this.movieP;
  } 
};

public selMovie='';
public view= true;
public photo='';
public changeMovie(){
  this.view= false;
 
};

public selDate = '';
public selClass='';
public selSeats=0;

public sCity;
public sArea;
public sDate
public sMovie;
public sClass;
public sSeats;
public totalPrice;

public bill(){
  if(this.selClass=='Dimond') {
    this.totalPrice= 200 * this.selSeats;
  }
  if(this.selClass=='Gold') {
    this.totalPrice= 150 * this.selSeats;
  }
  if(this.selClass=='Silver') {
    this.totalPrice= 100 * this.selSeats;
  }
}

public bookTicket() {
  this.sCity=this.selCity;
  this.sArea=this.selArea;
  this.sMovie=this.selMovie;
  this.sDate=this.selDate;
  this.sClass=this.selCity;
  this.sSeats=this.selClass;

  if (this.selMovie== 'Iron Man') {
    this.photo='assets/ironman.jpg'
  }
  if (this.selMovie== 'Bat Man') {
    this.photo='assets/batman.jpg'
  }
  if (this.selMovie== 'Thor') {
    this.photo='assets/thor.jpg'
  }
  if (this.selMovie== 'DeadPool') {
    this.photo='assets/deadpool.jpg'
  }
  if (this.selMovie== 'Avengers') {
    this.photo='assets/endgame.jpg'
  }
  if (this.selMovie== 'Joker') {
    this.photo='assets/joker.jpg'
  }
  this.bill();
}
}
