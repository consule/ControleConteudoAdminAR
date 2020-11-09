import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[sbPerguntasfrequentes]',
})
export class PerguntasfrequentesDirective {
    @Input() param!: string;

    constructor() {}
}
