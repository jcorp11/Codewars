function bouncingBall(h,  bounce,  window) {
    if( !(h > 0 && bounce < 1 && bounce > 0 && window < h) ) return -1;
    let bounceHeight = h;
    let n = 0;
    do{ 
        n++
        bounceHeight = bounceHeight*bounce;
        if(bounceHeight <= window) return n;
        n++
    }while(bounceHeight > window) 
}

console.log(bouncingBall(3, 0.66, 1.5))
console.log(bouncingBall(30, 0.66, 1.5))