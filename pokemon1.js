class AttackSkill {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
  }
}

class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(skill) {
    this.skills.push(skill);
  }

  showStatus() {
    console.log(`${this.name} status`);
    console.log(`health: ${this.health}`);
    console.log(`magic: ${this.magic}`);
  }

  getMagic() {
    this.magic += 20;
    console.log(`${this.name} got 20 magic back`);
  }

  attack(attack, pokemon) {
    let index = this.skills[attack];

    if (this.magic < index.magic) {
      console.log(`${this.name} has not enough magic, cannot launch attack!`);
    } else if (this.health <= 0) {
      console.log(`${this.name} is already dead!`);
    } else {
      if (pokemon.health > index.health) {
        pokemon.health -= index.health;
        console.log(
          `${this.name} launched skill '${index.name}' successfully!`
        );
        console.log(`${pokemon.name} got ${index.health} damage`);
      } else {
        pokemon.health -= index.health;
        console.log(`${pokemon.name} is killed!`);
      }
      return (this.magic -= index.magic);
    }
  }
}

// Pokemons
let pikachu = new Pokemon("Pikachu", 120, 80);
let bulbasaur = new Pokemon("Bulbasaur", 95, 105);

// Attacks
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

// learn Attacks
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

// Fight!
pikachu.attack(0, bulbasaur);
console.log("----------------");
bulbasaur.attack(0, pikachu);
console.log("----------------");
pikachu.showStatus();
console.log("----------------");
bulbasaur.showStatus();
console.log("----------------");
pikachu.attack(0, bulbasaur);
console.log("----------------");
pikachu.attack(0, bulbasaur);
console.log("----------------");
pikachu.getMagic();
console.log("----------------");
pikachu.attack(0, bulbasaur);
console.log("----------------");
bulbasaur.attack(0, pikachu);
