import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  choices = ['Batu', 'Gunting', 'Kertas'];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  determineWinner(player: string, computer: string): string {
    if (player === computer) {
      return 'Seri!';
    }
    if (
      (player === 'Batu' && computer === 'Gunting') ||
      (player === 'Gunting' && computer === 'Kertas') ||
      (player === 'Kertas' && computer === 'Batu')
    ) {
      return 'Kamu Menang!';
    }
    return 'Kamu Kalah!';
  }
  play(choice: string): void {
    this.playerChoice = choice;
    this.computerChoice =
      this.choices[this.getRandomNumber(this.choices.length)];
    this.result = this.determineWinner(this.playerChoice, this.computerChoice);
  }
}
