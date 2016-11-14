import { BasicObs } from '../interfaces/openmrs-basic-obs';
import { GroupObs } from '../interfaces/openmrs-group-obs';

export class GroupQuestionObs {
    concept: string;
    groupMembers: BasicObs [];

    constructor(options: GroupObs) {
        this.concept = options.concept;
        this.groupMembers = options.groupMembers;
    }
}
