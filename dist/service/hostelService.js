export class hostelService {
    constructor() {
        this.rooms = [];
        this.resident = [];
    }
    loadData() {
        const storedRooms = localStorage.getItem("rooms");
        const storedResidents = localStorage.getItem("resident");
        console.log(storedResidents);
        console.log(storedRooms);
    }
}
