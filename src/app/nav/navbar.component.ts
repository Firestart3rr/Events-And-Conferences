import {Component, OnInit} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {EventService, IEvent, ISession} from '../events/shared';
import {ActivatedRoute} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {

  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(public auth: AuthService,
              private eventService: EventService) {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
        // console.log(this.foundSessions);
      }
    );
  }
}
