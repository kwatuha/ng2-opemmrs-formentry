import { OpenmrsEncounter } from '../interfaces/openmrs-encounter';


export class Encounter {
    encounterDatetime: Date;
    location: string;
    provider: string;
    obs: any;
    orders?: any;
    patient: string;
    encounterType: string;
    uuid?: string;
    voided?: boolean;

    constructor(options: OpenmrsEncounter) {
        this.encounterDatetime = options.encounterDatetime;
        this.location = options.location;
        this.provider = options.provider;
        this.obs = options.obs;
        this.orders = options.orders;
        this.patient = options.patient;
        this.encounterType = options.encounterType;
        this.voided = options.voided;
        this.uuid = options.uuid;
    }
}
