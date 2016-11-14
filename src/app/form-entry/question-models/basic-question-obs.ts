import { BasicObs } from '../interfaces/openmrs-basic-obs';
import { BasicOpenmrsData } from './openmrs-data';

export class BasicQuestionObs  extends BasicOpenmrsData{
    value: any;

    constructor(options: BasicObs) {
        super(options);
        this.concept = options.concept;
        this.value = options.value;
        this.uuid = options.uuid;
        this.voided = options.voided;
    }
}
