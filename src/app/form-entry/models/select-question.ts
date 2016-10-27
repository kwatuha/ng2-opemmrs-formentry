import { QuestionBase } from './question-base';

export class SelectQuestion extends QuestionBase<String> {
    options: { key: string, value: string }[] = [];
    constructor(options: any) {
        super(options);
        this.type = 'select';
        this.options = options.options;
    }

}