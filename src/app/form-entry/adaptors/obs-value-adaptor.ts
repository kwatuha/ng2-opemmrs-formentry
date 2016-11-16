import { Form } from './models/form';
import { ValueAdaptor } from './interfaces/value-adaptor';
import { QuestionFactory } from '../factories/question.factory';

export class ObsValueAdaptor implements ValueAdaptor {
    schema: any;

    constructor(schema: any) {
        this.schema = schema;
    }

    populateForm(form: Form, value: any): Form {
        let questionFactory = new QuestionFactory();
        let QuestionModel = questionFactory.getSchemaQuestions(this.schema);
        form = new Form(QuestionModel);
        return form;

    }

    getFormValue(form: Form) {}

    resetForm(form: Form) { }
}
