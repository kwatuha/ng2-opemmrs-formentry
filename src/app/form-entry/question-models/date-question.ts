import { QuestionBase } from './question-base';
import { DateQuestionOptions } from './interfaces/date-question-options';
import { AfeControlType } from '../../abstract-controls-extension/afe-control-type';

export class DateQuestion extends QuestionBase {
    allowFutureDates: boolean;
    constructor(options: DateQuestionOptions) {
        super(options);
        this.renderingType = 'date';
        this.allowFutureDates = options.allowFutureDates;
        this.controlType = AfeControlType.AfeFormControl;
    }
}
