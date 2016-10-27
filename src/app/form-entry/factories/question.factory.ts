
import { TextInputQuestion } from "../models/text-input-question";
import { TextAreaInputQuestion } from "../models/text-area-input-question";
import { SelectQuestion } from "../models/select-question";
import { DateQuestion } from "../models/date-question";
import { MultiSelectQuestion } from "../models/multi-select-question";
import { QuestionGroup } from "../models/question-group";
import { RepeatingQuestion } from "../models/repeating-question";


export class QuestionFactory {
    constructor() {
    }

    toSelectQuestion(schemaQuestion: any): SelectQuestion {
        let question = new SelectQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.options = schemaQuestion.questionOptions.answers;
        question.type = schemaQuestion.questionOptions.rendering;
        return question;
    }

    toNumericQuestion(schemaQuestion: any): TextInputQuestion {
        let question = new TextInputQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.type = 'number';
        return question;
    }

    toNumberQuestion(schemaQuestion: any): TextInputQuestion {
        let question = new TextInputQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.type = 'number';
        return question;
    }

    toDateQuestion(schemaQuestion: any): DateQuestion {
        let question = new DateQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        return question;
    }

    toMultiCheckboxQuestion(schemaQuestion: any): MultiSelectQuestion {
        let question = new MultiSelectQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.options = schemaQuestion.questionOptions.answers;
        return question;
    }

    toTextAreaQuestion(schemaQuestion: any): TextAreaInputQuestion {
        let question = new TextAreaInputQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.isExpanded = schemaQuestion.isExpanded;
        question.rows = schemaQuestion.questionOptions.rows;
        return question;
    }

    toDrugQuestion(schemaQuestion: any): SelectQuestion {
        let question = new SelectQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.type = schemaQuestion.type;
        return question;
    }

    toRepeatingQuestion(schemaQuestion: any): RepeatingQuestion {
        let question = new RepeatingQuestion({});
        question.label = schemaQuestion.label;
        question.questions = schemaQuestion.questions;
        return question;
    }

    toPersonAttributeQuestion(schemaQuestion: any): SelectQuestion {
        let question = new SelectQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.type = schemaQuestion.type;
        return question;
    }

    toEncounterProviderQuestion(schemaQuestion: any): SelectQuestion {
        let question = new SelectQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.type = schemaQuestion.type;
        return question;
    }

    toEncounterLocationQuestion(schemaQuestion: any): SelectQuestion {
        let question = new SelectQuestion({});
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.type = schemaQuestion.type;
        return question;
    }

}