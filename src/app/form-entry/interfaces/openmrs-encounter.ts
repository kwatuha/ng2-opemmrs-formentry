export interface OpenmrsEncounter {
    encounterDatetime: Date;
    location: string;
    provider: string;
    obs: any;
    orders?: any;
    patient: string;
    encounterType: string;
    uuid?: string;
    voided?: boolean;
}