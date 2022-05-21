import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { BookCardsComponent } from './book-cards/book-cards.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [CategoryComponent, BookCardsComponent, ProgressComponent],
  imports: [CommonModule],
  exports: [CategoryComponent, BookCardsComponent, ProgressComponent],
})
export class ComponentsModule {}
