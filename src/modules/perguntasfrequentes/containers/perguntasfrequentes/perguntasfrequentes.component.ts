import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PerguntasFrequentesModel } from '@modules/perguntasfrequentes/models/perguntasfrequentes.model';
import { PerguntasfrequentesService } from '@modules/perguntasfrequentes/services';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
    selector: 'sb-perguntasfrequentes',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './perguntasfrequentes.component.html',
    styleUrls: ['perguntasfrequentes.component.css'],
})
export class PerguntasfrequentesComponent implements OnInit {
    perguntasFrequentesModel: PerguntasFrequentesModel[] = [];
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // perguntasFrequentesModel: PerguntasFrequentesModel[] = [
    //     {
    //         id: 7,
    //         pergunta: 'Brasil',
    //         resposta: 'Alemanha',
    //     }, npm install -g @angular/cli@8.3.17
    // ];
    constructor(private perguntasFrequentesService: PerguntasfrequentesService) {
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
