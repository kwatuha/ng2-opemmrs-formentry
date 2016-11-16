import { IFormFactory } from '../interfaces/form-factory';
import { Form } from '../models/form';
import { QuestionFactory } from '../models/question-factory';


export class FormFactory implements IFormFactory {
    constructor() { };
    createForm(schema: any): Form {
        let questionFactory = new QuestionFactory();
        let QuestionModel = questionFactory.createQuestionModel(schema);
        let form = new Form(QuestionModel);

        return form;
    }
}
///Addition
identifierLocation
encounterLocation
define sections, pages,
HTMLLabelElement
validators
questionSchemaModel

