import { Form } from '../models/form';
export interface ValueAdaptor {
    populateForm(form: Form, value: any): Form;
    getFormValue(form: Form): any;
    resetForm(form: Form): Form;
}
