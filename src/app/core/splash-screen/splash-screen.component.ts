import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {


  public showSplashScreen: boolean = true

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.getDefault();
  }


  // Interval for splash screen hide method
  getDefault() {
    interval(2000)
      .pipe(take(1))
      .subscribe(() => {
        this.showSplashScreen = false;
        this.redirectHomeScreen()
      });
  }


  redirectHomeScreen(){
    this._router.navigate(["homescreen"]);
  }

}
