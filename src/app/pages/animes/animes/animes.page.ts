import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import { AnimeModel } from 'src/app/core/model/anime-model';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.page.html',
  styleUrls: ['./animes.page.scss'],
})
export class AnimesPage implements OnInit {

  animes: AnimeModel[];
  pageOffset = 0;
  pageLimit = 10;
  lastOffset = 12062;
  first = true;
  last = false;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getAnimes();
  }

  private getAnimes(pageLimit?: number, pageOffset?: number) {
    this.apiService.getAnimes(pageLimit, pageOffset).then(response => {
      this.animes = response.data;
    });
  }

  clickOnNextPageButton() {
    this.pageOffset += this.pageLimit;
    this.getAnimes(this.pageLimit, this.pageOffset);
    this.first = false;
    this.last = this.pageOffset === this.lastOffset;
  }

  clickOnPreviousPageButton() {
    this.pageOffset -= this.pageLimit;
    this.getAnimes();
    this.first = this.pageOffset < this.pageLimit;
    this.last = false;
  }

  clickOnFirstPageButton() {
    this.getAnimes();
    this.first = true;
    this.last = false;
  }

  clickOnLastPageButton() {
    this.pageOffset = this.lastOffset;
    this.pageOffset += this.pageLimit;
    this.getAnimes(this.pageLimit, this.pageOffset);
    this.first = false;
    this.last = true;
  }


}
