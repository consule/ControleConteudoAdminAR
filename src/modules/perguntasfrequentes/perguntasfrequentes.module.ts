/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as perguntasfrequentesComponents from './components';

/* Containers */
import * as perguntasfrequentesContainers from './containers';

/* Guards */
import * as perguntasfrequentesGuards from './guards';

/* Services */
import * as perguntasfrequentesServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...perguntasfrequentesServices.services, ...perguntasfrequentesGuards.guards],
    declarations: [
        ...perguntasfrequentesContainers.containers,
        ...perguntasfrequentesComponents.components,
    ],
    exports: [
        ...perguntasfrequentesContainers.containers,
        ...perguntasfrequentesComponents.components,
    ],
})
export class PerguntasfrequentesModule {}
