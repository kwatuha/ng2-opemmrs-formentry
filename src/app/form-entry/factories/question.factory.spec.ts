import { TestBed } from '@angular/core/testing';

import { TextInputQuestion } from "../models/text-input-question";
import { TextAreaInputQuestion } from "../models/text-area-input-question";
import { SelectQuestion } from "../models/select-question";
import { DateQuestion } from "../models/date-question";
import { MultiSelectQuestion } from "../models/multi-select-question";
import { QuestionGroup } from "../models/question-group";
import { RepeatingQuestion } from "../models/repeating-question";
import { QuestionFactory } from "./question.factory";

describe('Question Factory', () => {

    let selectSchemaQuestion: any = {
        label: 'Patient previous ART use',
        type: 'obs',
        id: 'pastArtUse',
        questionOptions: {
            concept: 'a8a318e8-1350-11df-a1f1-0026b9348838',
            answers: [
                {
                    concept: 'a899b35c-1350-11df-a1f1-0026b9348838',
                    label: 'Yes'
                },
                {
                    concept: 'a899b42e-1350-11df-a1f1-0026b9348838',
                    label: 'No'
                }
            ],
            rendering: 'select'
        }
    };

    let numericSchemaQuestion: any = {
        label: 'Number of weeks on treatment:',
        id: 'ArvDays',
        type: 'obs',
        questionOptions: {
            rendering: 'numeric',
            concept: 'a89add22-1350-11df-a1f1-0026b9348838',
            answers: []
        },
        validators: [],
        hide: {
            hideWhenExpression: 'NewbornProhpArv !== "a899b35c-1350 - 11df-a1f1 - 0026b9348838"'
        }
    };

    let numberSchemaQuestion: any = {
        label: "mg",
        questionOptions: {
            concept: "a8a063c8-1350-11df-a1f1-0026b9348838",
            max: "1000",
            min: "0",
            rendering: "number"
        },
        validators: [],
        hide: {
            hideWhenExpression: "MothersArvUse !== 'a89aadc0-1350-11df-a1f1-0026b9348838'"
        }
    };


    let dateSchemaQuestion: any = {
        label: 'Date patient first became medically eligible for ART:',
        id: 'eligibility',
        type: 'obs',
        questionOptions: {
            concept: '81608e3b-fece-4136-8def-b822b54de197',
            rendering: 'date'
        },
        validators: [
            {
                type: 'date',
                allowFutureDates: 'false'
            },
            {
                type: 'js_expression',
                failsWhenExpression: '(new moment(encDate)).isBefore((new moment(myValue)), "day") || (new moment(encDate)).isSame((new moment(myValue)), "day")',
                message: 'Date should be before the encounter date.'
            }
        ]
    };

    let multiCheckboxSchemaQuestion: any = {
        label: 'Patient current ART regimen, peds: ',
        id: 'current_art_regimen_ped',
        questionOptions: {
            concept: 'a899cf5e-1350-11df-a1f1-0026b9348838',
            answers: [
                {
                    concept: 'b58a28d2-36de-11e0-93be-0026b9348838',
                    label: 'ABC 60mg/3TC 30mg'
                },
                {
                    concept: '25c753d8-870f-11e0-85d3-000d6014b64c',
                    label: 'ZDV 60mg/3TC 30mg'
                }
            ],
            rendering: 'multiCheckbox'
        },
        type: 'obs',
        validators: [],
        hide: {
            hideWhenExpression: 'onArt !== "a899b35c-1350 - 11df-a1f1 - 0026b9348838"'
        }
    };



    let textAreaSchemaQuestion: any = {
        label: 'Assessment Notes',
        isExpanded: 'true',
        questionOptions: [
            {
                label: 'Please enter the assessment below:',
                type: 'obs',
                id: 'assNote',
                required: 'false',
                default: '',
                questionOptions: {
                    concept: '23f710cc-7f9c-4255-9b6b-c3e240215dba',
                    rendering: 'textarea',
                    rows: 18
                }
            }
        ]
    };

    let drugSchemaQuestion: any = {
        type: 'encounterLocation',
        label: 'Facility name (site/satellite clinic required):',
        id: 'location',
        required: 'true',
        questionOptions: {
            rendering: 'ui-select-extended'
        }
    };

    let repeatingGroupSchemaQuestion: any = {
        type: 'obsGroup',
        label: 'Eligible for ART',
        questionOptions: {
            concept: 'a8a17a7e-1350-11df-a1f1-0026b9348838',
            rendering: 'group'
        },
        questions: [
            {
                label: 'Eligible for ART but not started:',
                id: 'artEligibleNotStarted',
                questionOptions: {
                    concept: 'a89d26cc-1350-11df-a1f1-0026b9348838',
                    answers: [
                        {
                            concept: 'a89ce50e-1350-11df-a1f1-0026b9348838',
                            label: 'Adherence Concerns'
                        },
                        {
                            concept: 'a8a8b26c-1350-11df-a1f1-0026b9348838',
                            label: 'On TB Treatment'
                        }
                    ],
                    rendering: 'select'
                },
                type: 'obs',
                validators: [],
                hide: {
                    hideWhenExpression: 'arvPlan !== "a899e0ac-1350 - 11df-a1f1 - 0026b9348838"'
                }
            },
            {
                label: 'Eligible for ART but not started: Other (specify):',
                questionOptions: {
                    concept: 'a8a06fc6-1350-11df-a1f1-0026b9348838',
                    rendering: 'text'
                },
                type: 'obs',
                id: 'q24dOther',
                validators: [],
                hide: {
                    hideWhenExpression: 'artEligibleNotStarted !== "a8aaf3e2-1350 - 11df-a1f1 - 0026b9348838"'
                }
            }
        ]
    };

    let personAttributeSchemaQuestion: any = {
        type: 'personAttribute',
        label: 'Specify name of clinic to which patient is being referred:',
        id: 'transfered_out_to_ampath',
        required: 'false',
        default: '',
        questionOptions: {
            rendering: 'ui-select-extended',
            attributeType: '8d87236c-c2cc-11de-8d13-0010c6dffd0f'
        }
    };


    let textSchemaQuestion: any = {
        label: 'Eligible for ART but not started: Other (specify):',
        questionOptions: {
            concept: 'a8a06fc6-1350-11df-a1f1-0026b9348838',
            rendering: 'text'
        }
    };

    let problemSchemaQuestion: any = {
        label: 'Reason for hospitalization:',
        questionOptions: {
            concept: 'a8a07a48-1350-11df-a1f1-0026b9348838',
            rendering: 'problem'
        },
        type: 'obs'
    };

    let encounterProviderSchemaQuestion: any = {
        type: 'encounterProvider',
        label: 'Provider',
        id: 'provider',
        required: 'true',
        default: '',
        questionOptions: {
            rendering: 'ui-select-extended'
        }
    };

    let encounterLocationSchemaQuestion: any = {
        type: 'encounterLocation',
        label: 'Facility name (site/satellite clinic required):',
        id: 'location',
        required: 'true',
        questionOptions: {
            rendering: 'ui-select-extended'
        }
    }

    let factory = new QuestionFactory();

    it('should convert schema select question to select question model', () => {
        let converted = factory.toSelectQuestion(selectSchemaQuestion);
        expect(converted.label).toEqual(selectSchemaQuestion.label);
        expect(converted.options).toEqual(selectSchemaQuestion.questionOptions.answers);
        expect(converted.type).toEqual(selectSchemaQuestion.questionOptions.rendering);
        expect(converted.key).toEqual(selectSchemaQuestion.id);

    });

    it('should convert schema numeric question to Numeric question model', () => {
        let converted = factory.toNumericQuestion(numericSchemaQuestion);
        expect(converted.label).toEqual(numericSchemaQuestion.label);
        expect(converted.key).toEqual(numericSchemaQuestion.id);
        expect(converted.type).toEqual('number');

    });

    it('should convert schema number question to Number question model', () => {
        let converted = factory.toNumberQuestion(numberSchemaQuestion);
        expect(converted.label).toEqual(numberSchemaQuestion.label);
        expect(converted.key).toEqual(numberSchemaQuestion.id);
        expect(converted.type).toEqual('number');

    });

    it('should convert schema date question to Date question model', () => {
        let converted = factory.toDateQuestion(dateSchemaQuestion);
        expect(converted.label).toEqual(dateSchemaQuestion.label);
        expect(converted.key).toEqual(dateSchemaQuestion.id);
        expect(converted.type).toEqual('date');

    });

    it('should convert schema multiCheckbox question to MultiCheckbox question model', () => {
        let converted = factory.toMultiCheckboxQuestion(multiCheckboxSchemaQuestion);
        expect(converted.label).toEqual(multiCheckboxSchemaQuestion.label);
        expect(converted.key).toEqual(multiCheckboxSchemaQuestion.id);
        expect(converted.options).toEqual(multiCheckboxSchemaQuestion.questionOptions.answers);
        expect(converted.type).toEqual('multi-select');

    });

    it('should convert schema text-area question to Text Area question model', () => {
        let converted = factory.toTextAreaQuestion(textAreaSchemaQuestion);
        expect(converted.label).toEqual(textAreaSchemaQuestion.label);
        expect(converted.key).toEqual(textAreaSchemaQuestion.id);
        expect(converted.isExpanded).toEqual(textAreaSchemaQuestion.isExpanded);
        expect(converted.rows).toEqual(textAreaSchemaQuestion.questionOptions.rows);

    });

    it('should convert schema drug question to Drug question model', () => {
        let converted = factory.toDrugQuestion(drugSchemaQuestion);
        expect(converted.label).toEqual(drugSchemaQuestion.label);
        expect(converted.key).toEqual(drugSchemaQuestion.id);
        expect(converted.type).toEqual(drugSchemaQuestion.type);

    });

    it('should convert schema repeating question to Repeating question model', () => {
        let converted = factory.toRepeatingQuestion(repeatingGroupSchemaQuestion);
        expect(converted.label).toEqual(repeatingGroupSchemaQuestion.label);
        expect(converted.questions).toEqual(repeatingGroupSchemaQuestion.questions);

    });

    it('should convert schema Person Attribute question to Person Attribute question model', () => {
        let converted = factory.toPersonAttributeQuestion(personAttributeSchemaQuestion);
        expect(converted.label).toEqual(personAttributeSchemaQuestion.label);
        expect(converted.key).toEqual(personAttributeSchemaQuestion.id);
        expect(converted.type).toEqual(personAttributeSchemaQuestion.type);

    });

    it('should convert schema encounter Provider question to Encounter Provider question model', () => {
        let converted = factory.toEncounterProviderQuestion(encounterProviderSchemaQuestion);
        expect(converted.label).toEqual(encounterProviderSchemaQuestion.label);
        expect(converted.key).toEqual(encounterProviderSchemaQuestion.id);
        expect(converted.type).toEqual(encounterProviderSchemaQuestion.type);

    });

    it('should convert schema encounter Location question to Encounter Location question model', () => {
        let converted = factory.toEncounterLocationQuestion(encounterLocationSchemaQuestion);
        expect(converted.label).toEqual(encounterLocationSchemaQuestion.label);
        expect(converted.key).toEqual(encounterLocationSchemaQuestion.id);
        expect(converted.type).toEqual(encounterLocationSchemaQuestion.type);

    });











})
