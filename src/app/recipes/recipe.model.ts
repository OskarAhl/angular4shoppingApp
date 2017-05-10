//blueprint for how recipes should look like
export class Recipe {
  //public so it can be accessed from the outside
  public name: string;
  public description: string;
  public imagePath: string;

  //will be executed once a new instance of class is created
  constructor (name: string, desc: string, imagePath:string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
