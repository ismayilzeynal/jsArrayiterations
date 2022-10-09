const ismayil = {
    name : "ismayil",
    surname : "zeynalov",
    salary : 5000
}

const namiq = {
    name : "namiq",
    surname : "kerimov",
    salary : 2156
}

const rahim = {
    name : "rahim",
    surname : "sterling",
    salary : 9456
}

const zamin = {
    name : "zamin",
    surname : "rustemli",
    salary : 1734
}

const elnur = {
    name : "elnur",
    surname : "seferov",
    salary : 99
}

const neriman = {
    name : "neriman",
    surname : "memmedli",
    salary : 100
}

const employees = [ismayil, rahim, namiq, zamin, neriman, elnur];

stortByName(employees);
printToConsole(employees);





function stortByName(arr)
{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i].name > arr[j].name)  
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function printToConsole(arr)
{
    arr.forEach(element => {
        console.log(element.name, element.surname, element.salary);
    });
}