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

const wait = time => new Promise(resolve => setTimeout(resolve, time));

document.getElementById("ageBtn").addEventListener("click", function() {
    const totalAge = students.reduce((acc, students)=> acc + students.age, 0);

    async function asyncAwait() {
        document.getElementById("step1").innerHTML = "Calculation Start" ;

        await wait(2000);
        document.getElementById("step2").innerHTML = "Second call Started";

        await wait();
        document.getElementById("step3").innerHTML = "third call started" ;

        await wait(3000);
        document.getElementById("avgA").innerHTML = "Average :" + totalAge / students.length;

        document.getElementById("finish").innerHTML = "third call finished" ;
        
    }

    asyncAwait();
  });
