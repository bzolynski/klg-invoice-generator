import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'klg-invoice-generator';
    sidenavMode$ = fromEvent(
        window.matchMedia('(max-width: 960px)'),
        'change'
    ).pipe(map((e) => ((e as MediaQueryListEvent).matches ? 'over' : 'side')));
    constructor() {}
}
