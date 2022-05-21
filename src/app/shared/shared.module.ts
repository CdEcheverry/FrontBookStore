import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchPanelComponent],
  imports: [CommonModule, NgbDropdownModule, FormsModule, FontAwesomeModule],
  exports: [HeaderComponent, FooterComponent, SearchPanelComponent],
})
export class SharedModule {}
