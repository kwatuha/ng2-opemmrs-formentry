import { BaseOptions } from '../interfaces/base-options';

export class QuestionBase {
    value?: any;
    type: string;
    key: string;
    label?: string;
    data?: any;

    constructor(options: BaseOptions) {

        this.value = options.value;
        this.type = options.type;
        this.key = options.key || '';
        this.label = options.label || '';
        this.data = options.data || '';
    }
}

