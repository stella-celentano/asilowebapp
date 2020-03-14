//Import Modules
import { NgModule, ModuleWithProviders } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LottieAnimationViewModule } from "ng-lottie"

//Import Components
import { LoadingComponent } from "./../web-components/common/loading/loading.component"
import { NoDataComponent } from "./../web-components/common/no-data/no-data.component"
import { ErrorComponent } from '../web-components/common/error/error.component'

//import Services
import { ContatoService } from "./services/contato.service"
import { FAQService } from "./services/faq.service"
import { HomeService } from "./services/home.service"
import { NoticiaService } from "./services/noticia.service"
import { NoticiasService } from "./services/noticias.service"
import { SobreService } from "./services/sobre.service"
import { TransparenciaService } from "./services/transparencia.service";

@NgModule({
    imports: [
        CommonModule,
        LottieAnimationViewModule
    ],
    declarations: [
        LoadingComponent,
        NoDataComponent,
        ErrorComponent
    ],
    exports: [
        LoadingComponent,
        NoDataComponent,
        ErrorComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ContatoService,
                FAQService,
                HomeService,
                NoticiaService,
                NoticiasService,
                SobreService,
                TransparenciaService
            ]
        }
    }

}