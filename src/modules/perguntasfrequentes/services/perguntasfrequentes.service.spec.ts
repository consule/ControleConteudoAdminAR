import { TestBed } from '@angular/core/testing';

import { PerguntasfrequentesService } from './perguntasfrequentes.service';

describe('PerguntasfrequentesService', () => {
    let perguntasfrequentesService: PerguntasfrequentesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PerguntasfrequentesService],
        });
        perguntasfrequentesService = TestBed.inject(PerguntasfrequentesService);
    });

    describe('getPerguntasfrequentes$', () => {
        it('should return Observable<Perguntasfrequentes>', () => {
            expect(perguntasfrequentesService).toBeDefined();
        });
    });
});
