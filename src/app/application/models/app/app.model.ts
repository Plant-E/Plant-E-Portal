import html2canvas from "html2canvas";
import { DisplayLinkCommunicationService } from "../../services/displayLinkCommunication/display-link-communication.service";

export class App {

  public key: string;
  public name: string;
  public img: string;

  //Dependencies
  readonly DLCommunication = new DisplayLinkCommunicationService();

  //App Logic
  public on: boolean = false;
  public interval: number = 0;

  constructor(app: any) {
    this.key = app.key;
    this.name = app.name;
    this.img = `assets/img/apps/${app.key}.png`;
  }

  public starGame(){
    // this.on = true;
    // this.interval = setInterval(this.runInterval.bind(this), 1000);
    this.runInterval();
  }
  public stopGame(){
    this.on = false;

    clearInterval(this.interval);
    this.interval = 0;
  }

  private async runInterval(){
    const element = document.querySelector('.app-container') as HTMLElement;
    const canvas = await html2canvas(element)

    const new_canvas = document.createElement('canvas');
    const context = new_canvas.getContext('2d');

    new_canvas.width = 8;
    new_canvas.height = 8;

    if(!context){ return; }

    context.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 8, 8);

    const base64 = new_canvas.toDataURL('image/png');
    console.log(base64);

    const response = await this.DLCommunication.send({
      command: 'VISUALIZE',
      image: base64,
    })
    console.log(response);
  }


}
