import { BasicObs } from './openmrs-basic-obs';
export interface GroupObs {
    concept: string;
    groupMembers: BasicObs[];
}