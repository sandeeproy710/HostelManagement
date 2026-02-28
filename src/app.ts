import { hostelService } from "./service/hostelService.js";

let service = new hostelService();
// console.log(service.loadData())
//console.log(service.addResident("som", 23, "24343334334", 110, "5thfeb"));

//service.removeResident("som17722");

service.updateResident("som17722", "Somdutta Mukherjee", 23, "24343334334", "5thfeb");

console.log(service.getResidents);


