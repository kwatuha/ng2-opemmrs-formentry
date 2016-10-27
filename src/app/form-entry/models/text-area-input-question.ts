import { TextInputQuestion } from "../models/text-input-question";

export class TextAreaInputQuestion extends TextInputQuestion {
    isExpanded: boolean;
    rows: number;
    constructor(options: any) {
        super(options);
        this.isExpanded = options.isExpanded || false;
        this.rows = options.rows || 18;
        this.type='textarea';

    }
}
