import { rooms } from "../model/room";
import { resident } from "../model/resident";
import { roomsAvailabity } from "../data/roomsData";

export class hostelService {
    private rooms: rooms[] = [];
    private resident: resident[] = [];

    constructor() { }

    loadData():void {
        const storedRooms=localStorage.getItem("rooms");
        const storedResidents=localStorage.getItem("resident");
        console.log(storedResidents);
        console.log(storedRooms);
        
    }
}