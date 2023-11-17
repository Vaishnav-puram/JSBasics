let calculator={
    total:0,
    add(a){
        this.total+=a;
       // console.log(this);
        return this;
    },
    mul(a){
        this.total*=a;
       // console.log(this);
        return this;
    },
    subtract(a){
        this.total-=a;
       // console.log(this);
        return this;
    }
}
const res=calculator.add(10).mul(5).subtract(30).add(10);
console.log(res);
console.log(res.total);