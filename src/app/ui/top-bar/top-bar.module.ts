import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
    declarations: [TopBarComponent],
    exports: [TopBarComponent],
})
export class TopBarModule {}
