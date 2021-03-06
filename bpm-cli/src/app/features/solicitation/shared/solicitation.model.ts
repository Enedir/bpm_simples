export class Solicitation {
  public id: number;
  public nameApplicant: string;
  public itemDescription: string;
  public productValue: number;
  public isApproved: string;
  public observation?: string;
}

export class SolicitationCommandRegister {
  constructor() {
    this.isApproved = 'ESPERA';
  }

  public nameApplicant: string;
  public itemDescription: string;
  public productValue: number;
  public isApproved: string;
}

export class SolicitationCommandUpdate {
  constructor(id?: number) {
    this.id = id;
    this.isApproved = 'ESPERA';
  }

  public id: number;
  public nameApplicant: string;
  public itemDescription: string;
  public productValue: number;
  public isApproved: string;
}

export class SolicitationCommandApprove {
  constructor(id?: number) {
    this.id = id;
  }
  public id: number;
  public isApproved: string;
  public observation?: string;
}
