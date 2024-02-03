var test = +readline()

while(test--) {
    ConvertToBinary(+readline())
}
function ConvertToBinary(n){
    if(n < 2){
        print(n)
        return
    }
    ConvertToBinary(n / 2)
    print(n % 2)
}