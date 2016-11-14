import { OpenmrsData } from '../interfaces/openmrs-data';


export class BasicOpenmrsData {
    concept: string;
    uuid?: string;
    voided?: boolean;

    constructor(options: OpenmrsData) {
        this.concept = options.concept;
        this.uuid = options.uuid;
        this.voided = options.voided;
    }
}
