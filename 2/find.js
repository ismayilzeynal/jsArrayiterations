const array = [1, 4, -7, 99, 0, -14, 18, 0, 71, -68];

function findMy(arr, callback)
{
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i]))
            return arr[i];
    }
}

function myfunc(element)
{
    return element === 0;
}
console.log(findMy(array, myfunc));