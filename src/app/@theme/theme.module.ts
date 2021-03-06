import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbButtonModule,
  NbInputModule,
  NbAccordionModule,
  NbDialogModule,
  NbWindowModule,
  NbListModule,
  NbToastrModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbTooltipModule,
  NbBadgeModule,
} from '@nebular/theme';

import {NbSecurityModule} from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
  ThemeSwitcherComponent,
  ThemeSwitcherListComponent,
  ChangeLanguageComponent,
  ChangeLanguageListComponent
} from './components';

import {
  CapitalizePipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';

import {DEFAULT_THEME} from './styles/theme.default';
import {COSMIC_THEME} from './styles/theme.cosmic';
import {CORPORATE_THEME} from './styles/theme.corporate';
import {TranslateModule} from "@ngx-translate/core";
import {WarningComponent} from "./components/warning/warning.component";
import {AccountHeaderComponent} from './components/account-header/account-header.component';
import {AccountHeaderListComponent} from './components/account-header/account-header-list/account-header-list.component';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
  NbSecurityModule, // *nbIsGranted directive,
  NbProgressBarModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbButtonModule,
  NbListModule,
  NbToastrModule,
  NbInputModule,
  NbAccordionModule,
  NbDialogModule,
  NbWindowModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbTooltipModule,
  NbBadgeModule,
];

const COMPONENTS = [
  ThemeSwitcherComponent,
  ThemeSwitcherListComponent,
  HeaderComponent,
  FooterComponent,
  LayoutComponent,
  ChangeLanguageComponent,
  ChangeLanguageListComponent,
  WarningComponent,
  AccountHeaderComponent,
  AccountHeaderListComponent
];

const ENTRY_COMPONENTS = [
  ThemeSwitcherListComponent,
  ChangeLanguageListComponent,
  WarningComponent,
  AccountHeaderComponent,
  AccountHeaderListComponent
];

const PIPES = [
  CapitalizePipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME],
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
  ...NbDialogModule.forRoot().providers,
  ...NbWindowModule.forRoot().providers,
  ...NbToastrModule.forRoot().providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES, ChangeLanguageListComponent],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [
    TranslateModule
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
