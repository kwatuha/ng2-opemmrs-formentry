import { IQuestionFactory } from '../interfaces/question-factory';
export class QuestionFactory implements IQuestionFactory {
    constructor() { }
    createQuestionModel(schema: any): any {
        console.log(schema);
        return null;
    }
    createSchema(questionModel: any): any {
        return null;
    }
}
