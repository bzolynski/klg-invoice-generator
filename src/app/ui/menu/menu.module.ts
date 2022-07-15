import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [CommonModule, MatListModule, RouterModule, MatToolbarModule],
    declarations: [MenuComponent],
    exports: [MenuComponent],
})
export class MenuModule {}
