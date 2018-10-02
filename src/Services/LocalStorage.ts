import {ITask} from "../Models/ITask";

export class LocalStorageService {

    private tasks: Array<ITask> = [];


    constructor() {

        const loadedTasks = window.localStorage.getItem('to-do-react-tasks');
        if (loadedTasks) {
            this.tasks = JSON.parse(loadedTasks);
        } else {
            this.seed();
        }
    }


    getAll(): Array<ITask>{
        return this.tasks;
    }

    getSingle(id: number): ITask | undefined {
        return this.tasks.find(task => task.Id === id);
    }

    update(id: number, task: ITask): ITask | undefined {

        let targetIndex: number  | undefined = this.tasks.findIndex(task => task.Id === id);

        if(targetIndex > -1) {
            console.log(targetIndex)
            this.tasks[targetIndex] = task;
        }
        console.log(this.tasks)
        this.save()
        return this.tasks[targetIndex];
    }

    save() {
        window.localStorage.setItem('to-do-react-tasks', JSON.stringify(this.tasks))
    }

    remove(id: number): ITask[] {
        let targetIndex: number  | undefined = this.tasks.findIndex(task => task.Id === id);
        let deleted: ITask[] = [];

        if(targetIndex > -1) {
            deleted = this.tasks.splice(targetIndex, 1);
            this.save();
        }

        return deleted;
    }

    private seed() {
        for(let i: number = 0; i < 100; i++) {
            this.tasks.push({
                Id :i,
                Name: `Task ${i}`,
                CreatedAt: new Date(),
                IsDone: i % 2 === 0,
            });
        }
    }
}