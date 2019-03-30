import { AbstractControl } from '@angular/forms';


export class CustomValidators {

    static emailDomain(domainName: string) {
        return (control: AbstractControl): { [Key: string]: any } | null => {
            const email: string = control.value;
            const domain: string = email.substring(email.lastIndexOf('@') + 1);
            if (email === '' || domain === domainName) {
                return null;
            }
            else {
                return { 'emailDomain': true };
            }
        }
    }

    static MatchControlsValue(Control1Name: string, Control2Name: string) {
        return (group: AbstractControl): { [Key: string]: any } | null => {
            const Control1 = group.get(Control1Name);
            const Control2 = group.get(Control2Name);
            if (Control1.value === Control2.value || Control2.pristine) {
                return null;
            }
            else {
                return { 'NotMatch': true }
            }
        }
    }
}