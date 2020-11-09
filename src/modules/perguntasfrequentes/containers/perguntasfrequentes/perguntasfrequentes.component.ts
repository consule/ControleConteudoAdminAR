import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerguntasFrequentesModel } from '@modules/perguntasfrequentes/models/perguntasfrequentes.model';
import { PerguntasfrequentesService } from '@modules/perguntasfrequentes/services';

@Component({
    selector: 'sb-perguntasfrequentes',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './perguntasfrequentes.component.html',
    styleUrls: ['perguntasfrequentes.component.scss'],
})
export class PerguntasfrequentesComponent implements OnInit {
    perguntasFrequentesModel: PerguntasFrequentesModel[] = [];
    // perguntasFrequentesModel: PerguntasFrequentesModel[] = [
    //     {
    //         id: 7,
    //         pergunta: 'Brasil',
    //         resposta: 'Alemanha',
    //     }, npm install -g @angular/cli@8.3.17
    // ];
    constructor(
        private perguntasFrequentesService: PerguntasfrequentesService
    ) {
   
        //  this.x = [
        //     // {
        //     //     id: 7,
        //     //     pergunta: 'Brasil',
        //     //     resposta: 'Alemanha',
        //     // }
        // ];
        // this.x = [
        //     {
        //         id: 7,
        //         pergunta: 'Brasil',
        //         resposta: 'Alemanha',
        //     }
        // ];
    }

    ngOnInit() {
        this.getPerguntasFrequentes();
        // this.perguntasFrequentesService.getPerguntasfrequentes().subscribe(res => {
        //     this.perguntasFrequentesModel = res;
        //   });
    }

    getPerguntasFrequentes() {
        this.perguntasFrequentesService.getPerguntasfrequentes().subscribe(perguntas => {
            this.perguntasFrequentesModel = perguntas;
        });
    }
}
