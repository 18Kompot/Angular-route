import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute) {}

  id: string = '';

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this._activatedRoute.params.subscribe((param) => {
      const _id = param['id'];

      if (!!_id) {
        this.id = _id;
      } else {
        this.id = 'Not specified yet';
      }
    });
  }
}
