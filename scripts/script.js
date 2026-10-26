function begone(what) {
    let Steam = document.getElementById("Steam")
    let NSwitcth = document.getElementById("NintendoSwitch")

    if (what === 1) {
        Steam.style.display = "block";
        NSwitcth.style.display = "none";
    } else { 
        if (what === 2) {
            NSwitcth.style.display = "block";
            Steam.style.display = "none";
        }
    }
}
 
const buttonContainer = document.getElementById("button-container");
const tablesContainer = document.getElementById("tables-container");

fetch("./games.json")
    .then(response => response.json())
    .then(gameData => {
        let firstTable = true;

        for (const consoleName in gameData) {

            // Making the button
            let btn = document.createElement("button");
            btn.innerText = consoleName;
            btn.onclick = function() {
                hideAllTables();
                document.getElementById(consoleName.replace(/\s+/g, '')).style.display = "block";
            };
            buttonContainer.appendChild(btn);

            // Making the table
            let table = document.createElement("table");
            table.className = "fafo";
            table.id = consoleName.replace(/\s+/g, '');

            if (firstTable) {
                table.style.display = "block";
                firstTable = false;
            } else {
                table.style.display = "none";
            }

            // header
            let headerRow = document.createElement("tr");
            let headerCell = document.createElement("th");
            headerCell.innerText = consoleName + " Games";
            headerRow.appendChild(headerCell);
            table.appendChild(headerRow);

            // Games lists
            const gamesList = gameData[consoleName].games;
            for (let i = 0; i < gamesList.length; i++) {
                let row = document.createElement("tr");
                let cell = document.createElement("td");
                cell.innerText = gamesList[i].name;

                if (gamesList[i].completed) {
                    cell.innerText += "☆*: .｡. o(≧▽≦)o .｡.:*☆";
                } else {
                    cell.innerText += " unbeaten";
                }

                row.appendChild(cell);
                table.appendChild(row);
            }

            tablesContainer.appendChild(table);
        }
    })
    .catch(error => console.error("Error loading JSON: ", error));

function hideAllTables() {
    let allTables = tablesContainer.getElementsByTagName("table");
    for (let i = 0; i < allTables.length; i++) {
        allTables[i].style.display = "none";
    }
}