import EvilGuy from "./models/EvilGuy";
import SuperHero from "./models/SuperHero";

function main() {
  const evilGuy = new EvilGuy("Otto", 100, 50);

  const attacks = new Array<string>("punch", "kick", "super attack");
  const attacksVal= new Array<number>(20,30,90);
  const superHero = new SuperHero("SpiderMan", 100, attacks, attacksVal,false);


while (evilGuy.getpower() > 0 && superHero.getpower()>0) {
  let choice = prompt(
    `Current state: ${superHero.getname()} - Power: ${superHero.getpower()} | ${evilGuy.getname()} - Power: ${evilGuy.getpower()}\n` +
    'Please select an action \n 1.Print All \n 2.Evil Attack\n 3.Hero Attack\n 4.Power Up (rest)'
  );

  switch (choice) {
    case '1':
      console.log("Evil Guy Details:");
      evilGuy.Print();

      console.log("\nSuper Hero Details:");
      superHero.Print();
      break;

    case '2':
      evilGuy.changeStatus();

      while (evilGuy.getisAttacking()) {
        console.log(`${evilGuy.getname()} is attacking!!`);
        superHero.takeDamage(evilGuy.attack);
    
        if (superHero.getpower() <= 0 || evilGuy.getpower() <= 0) {
          break;
        }
      }
    
      if (evilGuy.getpower() <= 0) {
        console.log(`${evilGuy.getname()} has run out of power and cannot continue attacking.`);
      } else {
        console.log(`${evilGuy.getname()} has stopped attacking.`);
      }
      break;

    case '3':
      if (!evilGuy.getisAttacking()) {
        superHero.saveTheWorldAndAttack();
        if (!evilGuy.getisAttacking()) {
          console.log(`${superHero.getname()} is attacking with ${superHero.getRandomAttack()}`);
          evilGuy.takeDamage(superHero.getRandomAttackValue());
        } else {
          console.log(`${superHero.getname()} can't attack while ${evilGuy.getname()} is attacking.`);
        }
      } else {
        console.log(`${evilGuy.getname()} is already attacking. ${superHero.getname()} cannot save the world at the moment.`);
      }
      break;

    case '4':
      superHero.powerUp(1);
      evilGuy.powerUp(1);
      break;

    default:
      console.log('Wrong choice, choose again');
  }
}

if (evilGuy.getpower() <= 0) {
  console.log(`${evilGuy.getname()} has run out of power. ${superHero.getname()} wins!`);
} else if (superHero.getpower() <= 0) {
  console.log(`${superHero.getname()} has run out of power. ${evilGuy.getname()} wins!`);
}
}
main()
