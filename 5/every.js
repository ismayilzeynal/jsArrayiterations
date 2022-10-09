const array = [1, 4, -7, 99, 0, -14, 18, 0, 71, -68];

function everyMy(arr, callback)
{
    for (let i = 0; i < arr.length; i++) {
        if(!callback(arr[i]))
            return false;
    }
    return true;
}

function myfunc(element)
{
    return element > 98;
}
console.log(everyMy(array, myfunc));