export class Usermodel {

  private prenom: string;
  private mail: string;
  private password: string;

  public constructor() {}

  public getPrenom(): string {
    return this.prenom;
  }

  public setPrenom(prenom: string): Usermodel {
    this.prenom = prenom;
    return this;
  }

  public getMail(): string {
    return this.mail;
  }

  public setMail(mail: string): Usermodel {
    this.mail = mail;
    return this;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): Usermodel {
    this.password = password;
    return this;
  }

}
