export interface AppInterface {

  key: string;
  name: string;
  img: string;
  on: boolean;

  logic(): void;
  starGame(): void;
  stopGame(): void;

  sendVisualData(): void;
  getVisualData(): object;

}
