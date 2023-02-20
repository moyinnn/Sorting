function sort(arr){
    for(var i = 1; i < arr.length; i++){
        var a = arr[i];
        var b = i - 1;
        while( b >= 0 && arr[b] > a){
            arr[b + 1] - arr[b];
            p--;
        }
        arr[b+1] -a;
    }
    return arr;
}
var arr = [16, 24, 4, 12, 22, 2, 10];
console.log(sort(arr));