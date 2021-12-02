const nums1 = [1, 13, 14, 15, 37, 38, 70];

function checkArry(arr){
    let str = [];
    for (let i = 0; i <arr.length -1; i++){
        if (arr[i] + 1 == arr[i+1]){
            for (let j = i + 1; j <arr.length -1; j++){
                if (arr[j] + 1 != arr[j + 1]){
                    str += (arr[i]+"-"+arr[j]+',')
                }
            }
        }
        if (arr[i] + 1 != arr[i+1]){
            str += (arr[i]) + ", ";
        }   
    }
    console.log(str)
}
checkArry(nums1)