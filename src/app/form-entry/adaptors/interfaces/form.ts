export interface IForm {
    questionModel: any;
    haschanges(form: IForm): boolean;
    reset(form: IForm);
}
