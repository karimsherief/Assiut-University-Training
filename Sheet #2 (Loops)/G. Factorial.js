var test = readline();

while(test--){
    var n = +readline();
    var fact = 1;
    for(var i = 1; i <= n; i++){
        fact *= i;
    }
    print(fact);
}