import { TestBed } from '@angular/core/testing';

import { PerguntasfrequentesGuard } from './perguntasfrequentes.guard';

describe('Perguntasfrequentes Guards', () => {
    let perguntasfrequentesGuard: PerguntasfrequentesGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [PerguntasfrequentesGuard],
        });
        perguntasfrequentesGuard = TestBed.inject(PerguntasfrequentesGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            perguntasfrequentesGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
