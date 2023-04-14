export interface Task {
    id?: number; //kérdőjel, mert opcionális az id
    text:string;
    day:string;
    weekday: string;
    time: string;
    locationtext: string;
    reminder: boolean;
}