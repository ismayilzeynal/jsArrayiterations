const array = [1, 4, -7, 99, 0, -14, 18, 0, 71, -68];

function filterMy(arr, callback)
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i]))
            newArr[newArr.length] = arr[i];
    }
    return newArr;
}


function myfunc(element)
{
    return element === 0;
}
console.log(filterMy(array, myfunc));