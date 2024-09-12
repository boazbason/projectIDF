let list_of_missions = [];
// הגדרת כל שדות האינפוט למשתנים

const FullNameInput = document.getElementById("Full-Name");
const RankInput = document.getElementById("Rank");
const PositionInput = document.getElementById("Position");
const PlaroomInput = document.getElementById("Plaroom");
const MissionTimeInput = document.getElementById("Mission-Time");
const StatusInput = document.getElementById("Status");
const inputButton = document.getElementById("input-button");
const tableOfMissions = document.getElementById("table-Of-Missions");


if(localStorage.getItem('todos')) {
    list_of_missions.push(...JSON.parse(localStorage.getItem('todos')));
    ShowListOnTable();
}


inputButton.addEventListener("click", AddNewMission)







function AddNewMission(){
    if(list_of_missions.length == 0){
        list_of_missions.push({"Name": "Name", "Rank": "Rank","Position": "Position", "Platoon": "Platoon", "Status": "Status", "Action": "Action"})
    }
    let newObject  = {"Name": FullNameInput.value, "Rank": RankInput.value, "Position": PositionInput.value, "Platoon": PlaroomInput.value, "Status": StatusInput.value};
    list_of_missions.push(newObject);
    saveToLocalStorage();
    ShowListOnTable();
}





function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(list_of_missions));
}


function ShowListOnTable(){
    tableOfMissions.innerHTML = "";
    if (list_of_missions.length < 1){
        console.log("no");
        
    }
    else{
        
        list_of_missions.forEach(element => {
            let TheColom = document.createElement("tr");
            // לולאה על האובייקט שתכניס את הערכים שלו לטבלה
            for (let property in element) {
                if(property == "Action"){
                    TheColom.classList.add("titleOfTable");
                }
                
                let amuda = document.createElement("th");
                amuda.innerHTML = element[property];
                TheColom.appendChild(amuda);
                
              }
              let amudaButtons = document.createElement("div");

                let buttonRemove = document.createElement("button");
                let buttonMission = document.createElement("button");
                let buttonEdit = document.createElement("button");

                buttonRemove.innerText = "Remove";
                buttonMission.innerText = "Mission";
                buttonEdit.innerText = "Edit";
                
                amudaButtons.classList.add("div-of-buttons");

                TheColom.appendChild(amudaButtons);

              tableOfMissions.appendChild(TheColom);
        })
        
    }
}