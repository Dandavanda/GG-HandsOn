const students = [
    {name: "Nicole ", age: 21},
    {name: "Gerald Berry", age: 34},
    {name: "Roderick Edwards", age: 21}
];

const names = students.map(students => students.name);
const ages = students.map(students => students.age);

table();
function table(){
    let tab = 
        `<table><tr>
            <th>Name</th>
            <th>Age</th>
        </tr>`;

    for (i=0; i< names.length; i++){
        tab += `
        <tr>
            <td>`+names[i]+`</td>
            <td>`+ages[i]+`</td>
        </tr>
        `;
    }
    tab += `</table>
    `;
    document.getElementById("contentTable").innerHTML = tab;
}

document.getElementById("ageBtn").addEventListener("click", function() {
    const totalAge = students.reduce((acc, students)=> acc + students.age, 0);
    document.getElementById("avgA").innerHTML = "Average age students : " + totalAge / students.length;

  });