
import { FormDataFactory } from './form-data.factory';
describe('Form Data Factory', () => {



    let simpleQuestionValue = 'test';
    let multiSelectQuestionValue = ['value 1', 'value 2', 'value 3', 'value 4'];

    let newQuestionModel = {
        data: { concept: 'concept-uuid' }
    };

    let updateQuestionModel = {
        data: { concept: 'concept-uuid', uuid: 'obs-uuid' }
    };

    let detetedQuestionModel = {
        data: { concept: 'concept-uuid', uuid: 'obs-uuid', voided: true }
    };

    let factory = new FormDataFactory();

    it('should convert New question to Basic Question Obs', () => {
        let converted = factory.toBasicQuestionObs(simpleQuestionValue, newQuestionModel);
        expect(converted.concept).toEqual('concept-uuid');
        expect(converted.value).toEqual(simpleQuestionValue);

    });

    it('should convert Updated question to Basic Question Obs', () => {
        let converted = factory.toBasicQuestionObs(simpleQuestionValue, updateQuestionModel);
        expect(converted.concept).toEqual(updateQuestionModel.data.concept);
        expect(converted.value).toEqual(simpleQuestionValue);
        expect(converted.uuid).toEqual(updateQuestionModel.data.uuid);

    });

    it('should convert Deleted question to Basic Question Obs', () => {
        let converted = factory.toBasicQuestionObs(simpleQuestionValue, detetedQuestionModel);
        expect(converted.concept).toEqual(updateQuestionModel.data.concept);
        expect(converted.value).toEqual(undefined);
        expect(converted.uuid).toEqual(updateQuestionModel.data.uuid);

    });

    it('should convert Multiselect question to Basic Question Obs Array', () => {
        let converted = factory.toMultiSelectQuestionObs(multiSelectQuestionValue, newQuestionModel);
        expect(converted.length).toEqual(4);
        expect(converted[0].concept).toEqual('concept-uuid');
        expect(converted[1].value).toEqual(multiSelectQuestionValue[1]);

    });

    let formSection = {
        onFamilyPlanning: 'a899b35c-1350-11df-a1f1-0026b9348838',
        FamilyplanningGroup: {
            fpMethod: [
                'feb48308-a56f-4754-8e8f-8c1698e570cb',
                'eaa5796d-0b1c-478b-8c9d-d23cf4c3bddc'
            ],
            otherfp: 'test1'
        },
        appStartDate: '2014-12-12',
        reasonNotOnFamilyPlanning: '37b27c86-cabb-4c82-9166-d67d2271a8a3'
    };

    let groupQuestion = {
        fpMethod: [
            'feb48308-a56f-4754-8e8f-8c1698e570cb',
            'eaa5796d-0b1c-478b-8c9d-d23cf4c3bddc'
        ],
        otherfp: 'test1',
        other: 'other test'
    };

    it('should convert group question to Group Question Obs', () => {
        let converted = factory.toGroupQuestionObs(groupQuestion, newQuestionModel);
        expect(converted.concept).toEqual('concept-uuid');
        expect(converted.groupMembers.length).toEqual(4);
        expect(converted.groupMembers[0].value).toEqual(groupQuestion.fpMethod[0]);
        expect(converted.groupMembers[3].value).toEqual(groupQuestion.other);

    });

    let encounterOptions = {
        encounterDatetime: '2014-12-12',
        location: 'location 1',
        provider: 'provider 1',
        patient: 'patient 1',
        encounterType: 'encounter type 1'
    };

    it('should convert form section output to Openmrs Encounter', () => {
        let converted = factory.toEncounter(formSection, newQuestionModel, encounterOptions);
        expect(converted.encounterDatetime).toEqual(encounterOptions.encounterDatetime);
        expect(converted.location).toEqual(encounterOptions.location);
        expect(converted.provider).toEqual(encounterOptions.provider);
        expect(converted.patient).toEqual(encounterOptions.patient);
        expect(converted.encounterType).toEqual(encounterOptions.encounterType);
        expect(converted.obs.length).toEqual(4);
        expect(converted.obs[1].groupMembers.length).toEqual(3);
        expect(converted.obs[2].value).toEqual(formSection.appStartDate);

    });

})
