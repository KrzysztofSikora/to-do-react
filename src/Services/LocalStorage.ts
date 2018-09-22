import {ITask} from "../Models/ITask";

export class LocalStorageService {

    private tasks: Array<ITask> = [];


    constructor() {
        for(let i: number = 0; i < 100; i++) {
            this.tasks.push({
                Id :i,
                Name: `Task ${i}`,
                CreatedAt: new Date(),
                IsDone: i % 2 === 0,
            });
        }
    }


    get(): Array<ITask>{

        return this.tasks;
    }

    update(id: number, task: ITask) {

        let targetIndex: number  | undefined = this.tasks.findIndex(task => task.Id === id);

        if(targetIndex > -1) {
            console.log(targetIndex)
            this.tasks[targetIndex] = task;
        }
        console.log(this.tasks)
        this.save()
    }

    save() {
        window.localStorage.setItem('to-do-react-tasks', JSON.stringify(this.tasks))
    }
}