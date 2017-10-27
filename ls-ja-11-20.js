function firstLast6(x){
    if (x[0]==6){
        return true;
    }else if (x[x.length-1]==6){
        return true;
    }else{
        return false;
    }

}

function has23(x){
    if(x.includes(2) || x.includes(3)){
        return true;
    }else{
        return false;
    }
}

function fix23(twothree){
    if (twothree [twothree.indexOf(3)-1]==2){
        twothree[twothree.indexOf(3)]=0;
    }
    return twothree;
}


function countYZ(a){
    var num =0;
    a = a.toUpperCase();
    for (var i=0;i<a.length;i++) {
        if (a[i] == " " && a[i - 1] == "Z") {
            console.log("1:" + num);
            num++;
        }
        if (a[i] == " " && a[i - 1] == "Y") {
            console.log(num);
            num++;
        }
    }

    if(a[a.length-1]=="Z"){
        console.log(num);
        num ++;
    }
    if (a[a.length-1]=="Y"){
        console.log(num);
        num ++;
    }

    return num;
}



function endOther(a,b){
    a = a.toLowerCase();
    b = b.toLowerCase();

    if(a.length>=b.length && a.endsWith(b)){
        return true;
    }
    if(b.length>=a.length && b.endsWith(a)){
        return true;
    }

    return false;
}

function starOut(a){
var answer= "";
    for (var i=0;i<a.length;i++){
        if(a[i]!= "*") {
            if (a[i - 1] != "*") {
                if (a[i + 1] != "*") {
                    answer += a[i];
                }
            }
        }
    }
    return answer;
}

function getSandwich(a){
    var first = a.indexOf("bread");
    var last = a.lastIndexOf("bread");
    if( first== -1 ||last== -1){
        return "";
    }
    if(first==last){
        return "";
    }
    else {
        return a.substring(first+5,last);
    }

}

function canBalance(a) {
    sum = 0;
    total = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
        for (var j = i + 1; j < a.length; j++) {
            total += a[j];
        }
        if (sum == total) {
            return true;
        }
        total = 0;
    }
    return false;
}

function countClumps(arr) {
    var numClumps = 0;
    for (var i = 0; i < arr.length; i++) {
       if(arr[i]!=arr[i+1] && arr[i]==arr[i-1]){
           numClumps+=1;
       }
    }
    return numClumps;
}

function evenlySpaced(a,b,c){

    if(a-b==b-c){
        return true;
    }
    if(b-a==c-b){
        return true;
    }
    if(c-a==a-b){
        return true;
    }
    if(a==b && a==c){
        return true;
    }
    if(a-c==c-b){
        return true;
    }
    return false;
}











function tester() {
    /* console.log(a.length);
    console.log(b.length);
    */
    document.getElementById("output").innerHTML  = firstLast6([5,4,6,7,8,6]);
    document.getElementById("output1").innerHTML  = has_23(5,7);
    document.getElementById("output2").innerHTML  = fix_23([2,4,3]);
    document.getElementById("output3").innerHTML  = countYZ("lovely","cruz");
    document.getElementById("output4").innerHTML  = endOther("lauren hez day fez");
    document.getElementById("output5").innerHTML  = starOut("acc*dtor");
    document.getElementById("output6").innerHTML  = getSandwich("xbreadstarbreadx");
    document.getElementById("output7").innerHTML  = canBalance([3,5,6,8,6]);
    document.getElementById("output8").innerHTML  = countClumps([1,1,1,1,4,4,4,5,6,7,8]);
    document.getElementById("output9").innerHTML  = evenlySpaced(4,5,6);






}


