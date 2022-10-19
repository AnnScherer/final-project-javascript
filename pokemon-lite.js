import prompt from "prompt-sync";
const promptSync = prompt();

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
let pikachu = new Pokemon("Pikachu", 40, 800);
let bulbasaur = new Pokemon("Bulbasaur", 55, 1000);

// Attacks
let lightning = new AttackSkill("lightning", 40, 30);
let thundershock = new AttackSkill("thunder shock", 50, 50);
let poisonSeed = new AttackSkill("poison seed", 20, 20);
let solarBeam = new AttackSkill("solar beam", 35, 40);

// learn Attacks
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(thundershock);
bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(solarBeam);

// Fight!
function getPokemon() {
  let whichPokemon = promptSync("Pikachu or Bulbasaur? (1 or 2): ");
  // Pikachu! ----------------------------------------------------------------------------------------------
  if (whichPokemon == 1) {
    let attackBulbasaur = promptSync(
      "Pikachu! Which attack do you choose for Bulbasaur? (lightning: 1 / thundershock: something else) => "
    );
    // Pikachu 1. round = lightning ---------
    if (attackBulbasaur == 1) {
      pikachu.attack(0, bulbasaur);
      let attackPikachu = promptSync(
        "Bulbasaur! Which attack do you choose for pikachu? (poison seed: 1 / solar beam: something else) => "
      );
      // Bulbasaur 2. round = poisen seed ---------
      if (attackPikachu == 1) {
        bulbasaur.attack(0, pikachu);
        attackBulbasaur = promptSync(
          "Pikachu! Which attack do you choose for Bulbasaur? (lightning: 1 / thundershock: something else) => "
        );
        // Pikachu 3. round = lightning ---------
        if (attackBulbasaur == 1) {
          pikachu.attack(0, bulbasaur);
        }
        // Pikachu 3. round = thunder shock ---------
        else {
          pikachu.attack(1, bulbasaur);
        }
      }
      // Bulbasaur 2. round = solar beam ---------
      else {
        bulbasaur.attack(1, pikachu);
        attackBulbasaur = promptSync(
          "Pikachu! Which attack do you choose for Bulbasaur? (lightning: 1 / thundershock: something else) => "
        );
        // Pikachu 3. round = lightning ---------
        if (attackBulbasaur == 1) {
          pikachu.attack(0, bulbasaur);
        }
        // Pikachu 3. round = thunder shock ---------
        else {
          pikachu.attack(1, bulbasaur);
        }
      }
    }
    // Pikachu 1. round = thunder shock ---------
    else {
      pikachu.attack(1, bulbasaur);
      let attackPikachu = promptSync(
        "Bulbasaur! Which attack do you choose for Pikachu? (poison seed: 1 / solar beam: something else) => "
      );
      // Bulbasaur 2. round = poisen seed ---------
      if (attackPikachu == 1) {
        bulbasaur.attack(0, pikachu);
        attackBulbasaur = promptSync(
          "Pikachu! Which attack do you choose for Bulbasaur? (lightning: 1 / thundershock: something else) => "
        );
        // Pikachu 3. round = lightning ---------
        if (attackBulbasaur == 1) {
          pikachu.attack(0, bulbasaur);
        }
        // Pikachu 3. round = thunder shock ---------
        else {
          pikachu.attack(1, bulbasaur);
        }
      }
      // Bulbasaur 2. round = solar beam ---------
      else {
        bulbasaur.attack(1, pikachu);
        attackBulbasaur = promptSync(
          "Pikachu! Which attack do you choose for Bulbasaur? (lightning: 1 / thundershock: something else) => "
        );
        // Pikachu 3. round = lightning ---------
        if (attackBulbasaur == 1) {
          pikachu.attack(0, bulbasaur);
        }
        // Pikachu 3. round = thunder shock ---------
        else {
          pikachu.attack(1, bulbasaur);
        }
      }
    }
    // Bulbasaur! -------------------------------------------------------------------------------------------
  } else if (whichPokemon == 2) {
    let attackPikachu = promptSync(
      "Which attack do you choose for Pikachu? (poison seed: 1 / solar beam: something else) => "
    );
    // Bulbasaur 1. round = poison seed ---------
    if (attackPikachu == 1) {
      bulbasaur.attack(0, pikachu);
      let attackBulbasaur = promptSync(
        "Pikachu! Which attack do you choose for Bulbasaur? (lightning: 1 / thundershock: something else) => "
      );
      // Pikachu 2. round = lightning ---------
      if (attackBulbasaur == 1) {
        pikachu.attack(0, bulbasaur);
        attackPikachu = promptSync(
          "Bulbasaur! Which attack do you choose for Pikachu? (poison seed: 1 / solar beam: something else) => "
        );
        // Bulbasaur 3. round = poison seed ---------
        if (attackPikachu == 1) {
          bulbasaur.attack(0, pikachu);
        }
        // Bulbasaur 3. round = solar beam ---------
        else {
          bulbasaur.attack(1, pikachu);
        }
      }
      // Pikachu 2. round = thunder shock ---------
      else {
        pikachu.attack(1, bulbasaur);
        attackPikachu = promptSync(
          "Bulbsasaur! Which attack do you choose for Pikachu? (poison seed: 1 / solar beam: something else) => "
        );
        // Bulbasaur 3. round = poison seed ---------
        if (attackPikachu == 1) {
          bulbasaur.attack(0, pikachu);
        }
        // Bulbasaur 3. round = solar beam ---------
        else {
          bulbasaur.attack(1, pikachu);
        }
      }
    }
    // Bulbasaur 1. round = solar beam ---------
    else {
      bulbasaur.attack(1, pikachu);
      let attackBulbasaur = promptSync(
        "Pikachu! Which attack? (lightning: 1 / thundershock: something else) => "
      );
      // Pikachu 2. round = lightning ---------
      if (attackBulbasaur == 1) {
        pikachu.attack(0, bulbasaur);
        attackPikachu = promptSync(
          "Bulbasaur! Which attack do you choose for Pikachu? (poison seed: 1 / solar beam: something else) => "
        );
        // Bulbsasaur 3. round = poison seed ---------
        if (attackPikachu == 1) {
          bulbasaur.attack(0, pikachu);
        }
        // Bulbasaur 3. round = solar beam ---------
        else {
          bulbasaur.attack(1, pikachu);
        }
      }
      // Pikachu 2. round = thundershock ---------
      else {
        pikachu.attack(1, bulbasaur);
        attackPikachu = promptSync(
          "Bulbasaur! Which attack do you choose for Pikachu? (poison seed: 1 / solar beam: something else) => "
        );
        // Bulbasaur 3. round = poison seed ---------
        if (attackPikachu == 1) {
          bulbasaur.attack(0, pikachu);
        }
        // Bulbasaur 3. round = solar beam ---------
        else {
          bulbasaur.attack(1, pikachu);
        }
      }
    }

    // -------------------------------------------------------------------------------------------
  } else {
    console.log("Choose between 1 and 2");
    getPokemon();
  }
}

getPokemon();
