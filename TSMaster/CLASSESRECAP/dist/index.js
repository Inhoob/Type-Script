class Player {
  //static을 선언하면 property나 method가 개별 instance가 아닌 Player에만 존재한다는 것을 의미
  static description = "Player In Our Game";
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  get numLives() {
    return this.#numLives;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error(`Score must be positive!`);
    }
    this.#score = newScore;
  }
  // getScore() {
  //     return this.#score
  // }
  updateScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log(`BOOYAH`);
  }
  loseLife() {
    this.#numLives -= 1;
  }
  #secret() {
    console.log(`Secret`);
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last); //super class(Player)의 constructor를 참조한다.
    this.powers = powers;
  }
  isAdmin = true;
}
const admin = new AdminPlayer("admin", "mCadmin", ["delete", "restore world"]);

const player1 = new Player("blue", "steele");
// player1.taunt();
// // console.log(player1.first)
// // console.log(player1.last)

console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1.score())
// console.log(player1.score);
// player1.updateScore(5);
// player1.score = 456;
// console.log(player1.score());
// console.log(player1.score);
// player1.secret;

// console.log(player1.fullName);
// player1.fullName = `noo guncha`;
// console.log(player1.fullName);
// const player2 = new Player("charlie", "brown");
// player2.taunt();
// console.log(player2.first);
// console.log(player2.last);
