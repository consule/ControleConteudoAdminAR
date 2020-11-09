import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PerguntasfrequentesDirective } from './perguntasfrequentes.directive';

@Component({
    template: '<div sbPerguntasfrequentes param="test"></div>',
})
class TestComponent {}

describe('PerguntasfrequentesDirective', () => {
    let fixture: ComponentFixture<TestComponent>;

    let testComponent: TestComponent;
    let testComponentDE: DebugElement;
    let testComponentNE: Element;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [PerguntasfrequentesDirective, TestComponent],
        }).createComponent(TestComponent);

        fixture.detectChanges();

        testComponent = fixture.componentInstance;
        testComponentDE = fixture.debugElement;
        testComponentNE = testComponentDE.nativeElement;
    });

    it('should have param set to test', () => {
        const directiveInstance = testComponentDE.query(By.directive(PerguntasfrequentesDirective));
        expect(directiveInstance.attributes.param).toBe('test');
    });
});
