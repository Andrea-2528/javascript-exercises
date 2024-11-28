const fibonacci = function(steps) {
    if(steps<0){return "OOPS"};
    const array=[];
    array[0]=0;
    array[1]=1;
    array[2]=1;
    for(i=3; i<=steps;i++){
        array[i]=array[i-1]+array[i-2];
    };
    return array[steps];
};

// Do not edit below this line
module.exports = fibonacci;
