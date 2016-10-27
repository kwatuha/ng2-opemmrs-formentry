import { QuestionBase } from './question-base';

export class DateQuestion extends QuestionBase<any> {
    constructor(options: any) {
        super(options);
        this.type =  'date';
    }
}