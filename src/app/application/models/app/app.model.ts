import html2canvas from "html2canvas";
import { DisplayLinkCommunicationService } from "../../services/displayLinkCommunication/display-link-communication.service";

export class App  {

  public key: string;
  public name: string;
  public img: string;

  //Dependencies
  readonly DLCommunication = new DisplayLinkCommunicationService();

  //App Logic
  public on: boolean = false;
  private interval: number = 0;

  public logic = () => {}

  constructor(app: any) {
    this.key = app.key;
    this.name = app.name;
    this.img = `assets/img/apps/${app.key}.png`;
  }

  public starGame(){
    this.on = true;
    this.runInterval();
    // this.interval = setInterval(this.runInterval.bind(this), 750);
  }
  public stopGame(){
    this.on = false;

    // clearInterval(this.interval);
    // this.interval = 0;
  }

  private async runInterval(){
    if(!this.on){ return; }

    // logic_response = await this.logic();
    const response = await this.sendVisualData();
    const logic_respons = await this.logic();
    setTimeout(this.runInterval.bind(this), 150);
  }

  //Visual data
  private async sendVisualData(){
    const pixels = await this.getVisualData();
    if(!pixels){ return; }

    return await this.DLCommunication.send({
      command: 'VISUALIZE',
      image: pixels,
    })
  }
  private async getVisualData(){
    const element = document.querySelector('.app-container') as HTMLElement;
    const canvas = await html2canvas(element)

    const new_canvas = document.createElement('canvas');
    const context = new_canvas.getContext('2d');

    new_canvas.width = 8;
    new_canvas.height = 8;

    if(!context){ return null; }

    context.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 8, 8);
    const image_data = context.getImageData(0, 0, new_canvas.width, new_canvas.height);
    return image_data.data;
  }

}
