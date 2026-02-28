import { roomsAvailabity } from "../data/roomsData.js";
export class hostelService {
    constructor() {
        this.rooms = [];
        this.resident = [];
        this.loadData();
    }
    loadData() {
        const storedRooms = localStorage.getItem("rooms");
        const storedResidents = localStorage.getItem("residents");
        if (storedRooms) {
            this.rooms = JSON.parse(storedRooms);
        }
        else {
            this.rooms = roomsAvailabity;
        }
        if (storedResidents) {
            this.resident = JSON.parse(storedResidents);
        }
        else {
            this.resident = [];
        }
        // console.log(this.rooms);
        // console.log(this.resident);
    }
    get getRooms() {
        return this.rooms;
    }
    get getResidents() {
        return this.resident;
    }
    //Save Data
    saveData() {
        localStorage.setItem("rooms", JSON.stringify(this.rooms));
        localStorage.setItem("residents", JSON.stringify(this.resident));
    }
    // Add user
    addResident(name, age, phone, roomNumber, checkIndate) {
        const room = this.rooms.find((r) => r.roomNumber === roomNumber);
        console.log(room);
        if (!room) {
            throw new Error("room doesnt exist");
        }
        else if (room.isOccupied) {
            throw new Error("Room is Already Occupied");
        }
        const newResident = {
            id: name.toLocaleLowerCase().slice(0, 4).concat(Date.now().toString().slice(0, 5)),
            name: name,
            age: age,
            phone: phone,
            roomNumber: roomNumber,
            checkIndate: checkIndate
        };
        this.resident.push(newResident);
        room.isOccupied = true;
        this.saveData();
        //console.log(this.rooms);
        //console.log(this.resident);
    }
    //remove User
    removeResident(residentID) {
        const delRes = this.resident.find((r) => r.id === residentID);
        if (!delRes) {
            throw new Error("Resident ID doesn't exsist");
        }
        // const residet = this.resident[index];
        const room = this.rooms.find((r) => r.roomNumber == delRes.roomNumber);
        if (!room) {
            throw new Error("room doesnt exist");
        }
        room.isOccupied = false;
        this.resident = this.resident.filter(res => res !== delRes);
        this.saveData();
        console.log(this.resident);
    }
    //update resident
    updateResident(changeID, name, age, phone, checkIndate) {
        const res = this.resident.find((r) => r.id === changeID);
        console.log(res);
        if (!res) {
            throw new Error("Resident ID doesn't exsist for updation");
        }
        // this.resident[res].name=name;
        res.name = name;
        res.age = age;
        res.phone = phone;
        res.checkIndate = checkIndate;
        this.saveData();
    }
}
