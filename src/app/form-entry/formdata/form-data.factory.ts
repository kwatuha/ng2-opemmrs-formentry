import { Encounter } from '../question-models/openmrs-encounter';
import { BasicQuestionObs } from '../question-models/basic-question-obs';
import { GroupQuestionObs } from '../question-models/group-question-obs';

export class FormDataFactory {
    constructor() { }
    toBasicQuestionObs(questionAnswer: any, questionModel: any): BasicQuestionObs {
        let obs = new BasicQuestionObs({ concept: '', value: '' });
        obs.concept = questionModel.data.concept;
        obs.value = questionAnswer;
        obs.uuid = questionModel.data.uuid;
        obs.voided = questionModel.data.voided;
        if (obs.voided === true) {
            delete obs.value;
        }

        return obs;
    }

    toMultiSelectQuestionObs(questionAnswer: any, questionModel: any): BasicQuestionObs[] {
        let multiSelectObs = [];
        for (let answer in questionAnswer) {
            if (questionAnswer.hasOwnProperty(answer)) {
                multiSelectObs.push(this.toBasicQuestionObs(questionAnswer[answer], questionModel));
            }
        }

        return multiSelectObs;
    }

    toGroupQuestionObs(formQuestion: any, questionModel: any): GroupQuestionObs {
        let obs = new GroupQuestionObs({ concept: '', groupMembers: [] });
        let groupMembers = [];
        obs.concept = questionModel.data.concept;

        for (let question in formQuestion) {
            if (formQuestion.hasOwnProperty(question)) {
                if (Array.isArray(formQuestion[question])) {
                    groupMembers = groupMembers.concat(this.toMultiSelectQuestionObs(formQuestion[question], questionModel));
                } else {
                    groupMembers.push(this.toBasicQuestionObs(formQuestion[question], questionModel));
                }
            }
        }

        obs.groupMembers = groupMembers;
        return obs;
    }

    toEncounter(formModel: any, questionModel: any, options): Encounter {

        let encounter = new Encounter({
            encounterDatetime: new Date(),
            location: '',
            provider: '',
            obs: '',
            orders: '',
            patient: '',
            encounterType: ''
        });

        encounter.encounterDatetime = options.encounterDatetime;
        encounter.location = options.location;
        encounter.provider = options.provider;
        encounter.patient = options.patient;
        encounter.encounterType = options.encounterType;
        encounter.uuid = options.uuid;
        encounter.voided = options.voided;

        encounter.obs = this.getObs(formModel, questionModel);
        encounter.orders = this.getOrders(formModel);
        return encounter;
    }

    getObs(formModel: any, questionModel: any): any {
        let obs = new Array();
        for (let formQuestion in formModel) {
            if (formModel.hasOwnProperty(formQuestion)) {
                let questionResponse = formModel[formQuestion];
                if (Array.isArray(questionResponse)) {
                    obs = obs.concat(this.toMultiSelectQuestionObs(questionResponse, questionModel));
                } else if (!Array.isArray(formModel[formQuestion]) && typeof questionResponse === 'object') {
                    obs.push(this.toGroupQuestionObs(questionResponse, questionModel));
                } else {
                    obs.push(this.toBasicQuestionObs(questionResponse, questionModel));
                }
            }
        }
        return obs;
    }

    getOrders(formModel: any): any {
        return [];
    }

}
