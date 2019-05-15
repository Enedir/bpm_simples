export class Solicitation {

    public id: number;
    public nameApplicant: string;
    public itemDescription: string;
    public productValue: number;
    public isApproved: string;
    public observation?: string;
}

export class SolicitationCommandRegister {

    public nameApplicant: string;
    public itemDescription: string;
    public productValue: number;
    public isApproved: string;

    constructor() {
        this.isApproved = 'IN_WATERY'
    }
}

export class SolicitationCommandUpdate {

    public id: number;
    public nameApplicant: string;
    public itemDescription: string;
    public productValue: number;
    public isApproved: string;

    constructor(id?: number) {
        this.id = id;
        this.isApproved = 'IN_WATERY'
    }

}

export class SolicitationCommandApprove {

    public id: number;
    public isApproved: string;
    public observation?: string;

    constructor(id?: number) {
        this.id = id;
    }
}