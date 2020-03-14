//Import Modules
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common"
import { SharedModule } from "./../shared/shared.module"
import { NgxPaginationModule } from "ngx-pagination"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { BsDropdownModule, TooltipModule, ModalModule } from "ngx-bootstrap"
import { OrderModule } from 'ngx-order-pipe';

//Import Components
import { HeaderComponent } from "./../web-components/admin-panel/header/header.component"
import { SidenavComponent } from "./../web-components/admin-panel/sidenav/sidenav.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { PortalTransparenciaComponent } from './portal-transparencia/portal-transparencia.component'
import { SobreComponent } from './sobre/sobre.component'
import { NoticiasComponent } from "./noticias/noticias.component"
import { ContatoAdminComponent } from './contato/contato.component'
import { FaqAdmninComponent } from "./faq-admnin/faq-admnin.component"

//Import Routes
import { AdminPanelRoutes } from "./admin-panel.routing"

@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxPaginationModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        BrowserAnimationsModule,
        NgxPaginationModule,
        OrderModule,
        RouterModule.forChild(AdminPanelRoutes)
    ],
    declarations: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        FaqAdmninComponent,
        PortalTransparenciaComponent,
        SobreComponent,
        NoticiasComponent,
        ContatoAdminComponent
    ],
    exports: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        PortalTransparenciaComponent,
        SobreComponent,
        NoticiasComponent,
        ContatoAdminComponent
    ]
})
export class AdminPanelModule { }