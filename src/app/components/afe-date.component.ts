import {
    Component, Input, forwardRef, OnInit, OnChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'afe-date',
    template: `<input type="date"/><div></div>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AfeDateComponent),
            multi: true
        }]
})
export class AfeDateComponent implements ControlValueAccessor, OnInit, OnChanges {
    @Input() min: Date;
    @Input() allowFutureDates: boolean;
    question_options: any = [];
    selected_question_option: any;
    errors: any = [];
    propagateChange = (_: any) => { };

    getChangingText(event) {
        // console.log(event);
        // this.getData(event).subscribe((options) => {
        //     this.question_options = options;
        // });
    }

    writeValue(obj: any): void {

    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;

    }

    registerOnTouched(fn: any): void { }

    ngOnChanges(changes: any) { }

    ngOnInit() {
        if (this.allowFutureDates === true) {
            let minDate = Date()

        }
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxx' + this.allowFutureDates);
    }

}
