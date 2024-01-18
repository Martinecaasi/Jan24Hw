import Person from "./person";

export default class SuperHero extends Person {
  private attacks: Array<string>;
  private attacksVal: Array<number>;
  private saveTheWorld:boolean;

  constructor(name: string, power: number, attacks: Array<string>, attacksVal: Array<number>,saveTheWorld:boolean) {
    super(name, power);
    this.attacks = attacks;
    this.attacksVal = attacksVal;
    this.saveTheWorld=saveTheWorld;
    
  }



  public saveTheWorldAndAttack() {
    if (this.attacks) {
      console.log(`${this.name} is already attacking. Cannot save the world at the moment.`);
    } else {
      console.log(`${this.name} is saving the world! Power before saving: ${this.power}`);
      this.power += 1; 
      this.saveTheWorld = true;
      console.log(`${this.name} has successfully saved the world! Power after saving: ${this.power}`);
    }
  }

  public strengthenHero() {
    if (!this.attacksVal) {
      this.power += 1; 
      console.log(`${this.name} is getting stronger! Power: ${this.power}`);
    } else {
      console.log(`${this.name} can't strengthen during a battle.`);
    }
  }

  public getRandomAttack(): string {
    const randomIndex = Math.floor(Math.random() * this.attacks.length);
    return this.attacks[randomIndex];
  }

  public getRandomAttackValue(): number {
    const randomIndex = Math.floor(Math.random() * this.attacksVal.length);
    return this.attacksVal[randomIndex];
  }

  public Print() {
    super.Print();
    console.log(`Hero's Attacks: ${this.attacks}`);
  }
}
