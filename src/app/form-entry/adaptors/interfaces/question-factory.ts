export interface IQuestionFactory {
    createQuestionModel(schema: any): any;
    createSchema(questionModel: any): any;
}
