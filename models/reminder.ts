export default class Reminders{
    readonly  id: number;
    isCompleted: boolean;
constructor(public title: string){
    this.id = Date.now();
    this.isCompleted = false;
    }
}