function compare(a, b)
{
    if ((a & 1) == (b & 1)) {
        return a > b;
    }
    return (a & 1) > (b & 1);
}
function separateOddEven(arr, k)
{
    arr.sort(compare);
 
    for (let i = 0; i < k; ++i) {
        document.write(arr[i] + " ");
    }
}
Array.from(Array(100).keys())
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = arr.length;
separateOddEven(arr, N);
 
