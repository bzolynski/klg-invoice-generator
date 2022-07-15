import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
    @Output() toggleNav = new Subject();
}
