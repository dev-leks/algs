/**
 * Orchestrator
 * - Owns main game loop
 * - Coordinates board, turns, dice
 * - Checks win condition
 * - Does NOT contain rule logic
 */
class Game {
  private readonly players: Player[] = [];
  private board: Board;
  private turnManager: TurnManager;
  private movementManager: MovementManager;
  private winner?: Player;

  constructor() {
    this.players = [];
    this.board = new Board(new Map());
    this.turnManager = new TurnManager(this.players);
    this.movementManager = new MovementManager(new Dice());
  }

  start(): void {}

  playTurn(): void {
    const player = this.turnManager.getCurrentPlayer();

    const steps = this.movementManager.roll();
    const next = this.board.calculateNextPosition(player.position, steps);
    player.moveTo(next);

    const cell = this.board.getCell(next);
    cell?.onLand(player, this);

    this.checkWinner(player)
  }

  private checkWinner(player: Player): boolean {
    if (true) {
      this.winner = player;
    }

    return false;
  }
}

/**
 * State Holder
 * - Holds player state
 * - Knows its position
 */
class Player {
  position: number = 0;

  moveTo(position: number) {}
}

/**
 * Structure + Movement Rules
 * - Knows board size
 * - Holds special cells
 * - Calculates valid movement
 */
class Board {
  cells: Map<number, Cell> = new Map();

  constructor(cells: Map<number, Cell> = new Map()) {
    this.cells = cells;
  }

  calculateNextPosition(currentPosition: number, steps: number): number {
    // check boundaries
    return currentPosition + steps;
  }

  getCell(position: number): Cell | undefined {
    return this.cells.get(position);
  }
}

/**
 * Behavior Strategy
 * - Encapsulates behavior triggered when a player lands.
 */
interface Cell {
  onLand(player: Player, game: Game): void;
}

class Snake implements Cell {
  constructor(private readonly target: number) {}

  onLand(player: Player, game: Game): void {
    // move down
    player.moveTo(this.target);
  }
}

class Ladder implements Cell  {
  constructor(private readonly target: number) {}

  onLand(player: Player, game: Game): void {
    // move up
    player.moveTo(this.target);
  }
}

/**
 * Strategy Pattern
 * - Encapsulate roll logic.
 */
interface MovementController {
  roll(): number;
}

class MovementManager {
  constructor(private readonly controller: MovementController) {}

  roll(): number {
    return this.controller.roll();
  }
}

class Dice implements MovementController {
  roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}

/**
 * Turn Logic
 * - Decides whose turn it is
 */
class TurnManager {
  private currentIndex = 0;

  constructor(private readonly players: Player[]) {}

  getCurrentPlayer(): Player {
    return this.players[this.currentIndex];
  }

  next(players: Player[]): Player {
    this.currentIndex = (this.currentIndex + 1) % players.length;
    return players[this.currentIndex];
  }
}
