/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PerguntasfrequentesModule } from './perguntasfrequentes.module';

/* Containers */
import * as perguntasfrequentesContainers from './containers';

/* Guards */
import * as perguntasfrequentesGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: perguntasfrequentesContainers.PerguntasfrequentesComponent,
        data: {
            title: 'Perguntas Frequentes',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Tables',
                    active: false,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [PerguntasfrequentesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PerguntasfrequentesRoutingModule {}
