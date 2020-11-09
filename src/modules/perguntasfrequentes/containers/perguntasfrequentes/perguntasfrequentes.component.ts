import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerguntasFrequentesModel } from '@modules/perguntasfrequentes/models/perguntasfrequentes.model';
import { PerguntasfrequentesService } from '@modules/perguntasfrequentes/services';

@Component({
    selector: 'sb-perguntasfrequentes',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './perguntasfrequentes.component.html',
    styleUrls: ['perguntasfrequentes.component.scss'],
})
export class PerguntasfrequentesComponent implements OnInit {
    x: PerguntasFrequentesModel[];
    // perguntasFrequentesModel: PerguntasFrequentesModel[] = [
    //     {
    //         id: 7,
    //         pergunta: 'Brasil',
    //         resposta: 'Alemanha',
    //     }, npm install -g @angular/cli@8.3.17
    // ];
    constructor(
        private router: Router,
        private perguntasFrequentesService: PerguntasfrequentesService
    ) {
        this.x = [];
    }

    ngOnInit() {
        this.getPerguntasFrequentes();
    }

    getPerguntasFrequentes() {
        this.perguntasFrequentesService.getPerguntasfrequentes().subscribe(perguntas => {
            this.x = perguntas;
        });
    }
}
