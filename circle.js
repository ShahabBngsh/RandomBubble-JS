class Circle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.r = 2
    }
    edges() {
        return (this.x + this.r+2 < canvasX && this.x-this.r  > 2
        && this.y + this.r +2 < canvasY && this. y - this.r  > 2);
    }
    overlapping(arr, limit) {
        for(var j=0; j<limit; j++) {
            if(arr[j].x!=this.x&&arr[j].y!=this.y){
                if(dist(this.x, this.y, 0, arr[j].x, arr[j].y, 0) <= this.r+arr[j].r){
                    return true;
                }
            }
        }
    }
    grow(arr, limit) {
        if(this.edges() && !this.overlapping(arr, limit)) {
            this.r += 1;
        }
    }
    radius () {
        return this.r;
    }
    show () {
        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
  }