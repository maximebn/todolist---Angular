export class User {
  private prenom: string;
  private mail: string;
  private password: string;

  public constructor() {}

  public setPrenom(prenom: string): User {
    this.prenom = prenom;
    return this;
  }

  public getPrenom(): string {
    return this.prenom;
  }

  public setMail(mail: string): User {
    this.mail = mail;
    return this;
  }

  public getMail(): string {
    return this.mail;
  }

  public setPassword(password: string): User {
    this.password = password;
    return this;
  }

  public getPassword(): string {
    return this.password;
  }

  public deserialize(datas: any): User {

    this.prenom = datas.prenom;
    this.mail = datas.mail;
    this.password = datas.password;

    return this;
  }

}
