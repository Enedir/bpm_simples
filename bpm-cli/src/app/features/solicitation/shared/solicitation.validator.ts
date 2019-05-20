import { ValidationErrors, AbstractControl } from '@angular/forms';

export function SolicitationValidator(control: AbstractControl): ValidationErrors | null {

    const status = control.get('isApproved').value;
    const observation = control.get('observation').value;

    return (status === 'REPROVADO' && observation === '') ? { observationEmpty: true } : null;

}

