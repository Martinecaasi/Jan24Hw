import Person from "./person";

export default class EvilGuy extends Person {
  private numCriminals: number;
  private isAttacking: boolean = false;
  public attack: number = 20; // Made attack public for access

  constructor(name: string, power: number, numCriminals: number) {
    super(name, power);
    this.numCriminals = numCriminals;
  }

  public getnumCriminals(): number {
    return this.numCriminals;
  }

  public setnumCriminals(numCriminals: number) {
    this.numCriminals = numCriminals;
  }

  public getisAttacking(): boolean {
    return this.isAttacking;
  }

  public setisAttacking(isAttacking: boolean) {
    this.isAttacking = isAttacking;
  }

  public getattack(): number {
    return this.attack;
  }

  public setattack(attack: number) {
    this.attack = attack;
  }

  public changeStatus() {
    this.isAttacking = !this.isAttacking;
  }

  public recruitCriminals(numRecruits: number) {
    this.numCriminals += numRecruits;
    this.power += numRecruits;
  }

  public takeDamage(amount: number) {
    this.power -= amount;
    if (this.power < 0) {
      this.power = 0;
    }
  }

  public Print() {
    super.Print();
    console.log(`Number of criminals in the army: ${this.numCriminals}`);
  }
}
