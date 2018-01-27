class User {
    constructor(){
        this.range = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];
        this.c = 0;
        this.rank = -8;
        this.progress = 0;
    }
    incProgress(act) {
        if(act == 0 || act < -8 || act > 8) throw new Error('error');
        if(act == this.rank) {
            this.progress += 3;
        }
        if((this.rank - act == 1)||(this.rank == 1 && act == -1)) {
            this.progress += 1;
        }
        if(act > this.rank) {
            if (this.rank <= -1 && act >= 1) {
                this.progress += 10*Math.pow((act - this.rank - 1),2);
            } else {
                this.progress += 10*Math.pow((act - this.rank),2);
            }    
        }
        if(this.progress >= 100 && this.rank < 8) {
            while(this.progress >= 100) {
                this.c++;
                this.rank = this.range[this.c];
                this.progress -= 100;
            }
        }
        if(this.rank == 8) {
            this.progress = 0;
        }
    }
}
