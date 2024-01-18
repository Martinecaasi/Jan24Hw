export default class Person {
  protected name: string;
  public power: number;

  constructor(name: string, power: number) {
    this.name = name;
    this.power = power;
  }
    public getname(): string {
    return this.name;
  }

  public getpower(): number {
    return this.power;
  }

  public setname(name: string) {
    this.name = name;
  }

  public setpower(power: number) {
    this.power = power;
  }

  public Print() {
    console.log(`Name: ${this.name} Power: ${this.power}`);
  }

  public takeDamage(amount: number) {
    this.power -= amount;
    if (this.power < 0) {
      this.power = 0;
    }
  }

  public powerUp(amount: number) {
    this.power += amount;
    console.log(`${this.name} is powering up! Power: ${this.power}`);
  }
}
