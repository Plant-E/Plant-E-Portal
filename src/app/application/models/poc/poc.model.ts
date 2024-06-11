import {App} from "../app/app.model";
import {AppInterface} from "../../Interfaces/App.interface";

export class Poc extends App implements AppInterface {

  public offset ={
    top: 43.75,
    left: 43.75,
  }

  constructor(app: any) {
    super(app);
  }

  public override async logic(){
    this.offset.top = Math.random() * 87.5;
    this.offset.left = Math.random() * 87.5;
  }

}
