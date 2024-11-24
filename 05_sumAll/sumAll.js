const sumAll = function(int1, int2) {
    let sum=0;
    if(typeof int1 == 'number' && typeof int2 == 'number'){
        if (int1 >= 0 && int2 >= 0) {
            if (Number.isInteger(int1)==true && Number.isInteger(int2)==true){
                if (int1==int2){
                    return int1;
                }
                if (int1>int2){
                        let temp=int2;
                        int2=int1;
                        int1=temp;
                    }
                
                sum = int1;

                while(int1!=int2){
                    int1++;
                    sum += int1;
                }
                
               
            }else {return "ERROR"}
        }else {return "ERROR"}        
    }else {return "ERROR"}

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
