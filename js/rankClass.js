class User{
    constructor(){
        this.rank = -8;
        this.progress = 0;
    }
    incProgress(rankAct){
        console.log( this, rankAct)
        if(rankAct > 8 || rankAct === 0 || rankAct < -8){
         throw new Error('Activity Rank Invalid');
        }    
        
        const trueRank = this.rank > 0 ? this.rank - 1 : this.rank
        const trueRankAct = rankAct > 0 ? rankAct - 1 : rankAct
        
        const rankdif = trueRankAct - trueRank;
        // console.log(rankdif)
        let points = 0;
        // if( rankdif <= -2) 
        
        if (rankdif === -1 ) points = 1 ;
        else if(rankdif === 0) points = 3;
        else if(rankdif > 0) points = 10 * rankdif * rankdif;
        
        // console.log(points)
        this.updateRank(points);


    }

    updateRank(points){
        let aux = this.progress + points;
        
        while(aux>=100){
            this.rank +=1;
            if(this.rank === 0) this.rank += 1;
            aux -= 100;
        }
        this.progress = aux;
        if(this.rank >= 8 ){
         this.rank = 8 ;
         this.progress = 0;
        }    
        
    }
}

const user = new User();
