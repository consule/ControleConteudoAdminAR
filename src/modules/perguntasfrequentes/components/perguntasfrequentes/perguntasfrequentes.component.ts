import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerguntasFrequentesModel } from '@modules/perguntasfrequentes/models';
import { PerguntasfrequentesService } from '@modules/perguntasfrequentes/services';

@Component({
    selector: 'sb-perguntasfrequentes',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './perguntasfrequentes.component.html',
    styleUrls: ['perguntasfrequentes.component.scss'],
})
export class PerguntasfrequentesComponent implements OnInit {
    // perguntasFrequentesModel: PerguntasFrequentesModel[];
    constructor(
        private router: Router,
        private perguntasFrequentesService: PerguntasfrequentesService
    ) {
        // this.perguntasFrequentesModel = [];
    }
    ngOnInit() {
        // this.getPerguntasFrequentes();
    }

    // getPerguntasFrequentes() {
    //     return this.perguntasFrequentesService.getPerguntasfrequentes().subscribe(perguntas => {
    //         this.perguntasFrequentesModel = perguntas;
    //     });
    // }
}

