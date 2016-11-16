import { IForm } from '../interfaces/form';
export interface IFormFactory {
    createForm(schema: any): IForm;
}
