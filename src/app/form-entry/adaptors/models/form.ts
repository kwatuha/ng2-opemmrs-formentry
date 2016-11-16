import { IForm } from '../interfaces/form';

export class Form implements IForm {
    questionModel: any;

    constructor(questionModel: any) {
        this.questionModel = questionModel;
    }

    haschanges(form: Form): boolean {
        return true;
    };
    reset(form: Form) {

    };
}
