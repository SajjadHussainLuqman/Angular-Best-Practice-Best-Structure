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
}