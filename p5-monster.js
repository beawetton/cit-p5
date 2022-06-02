module.exports = class Monster {
    constructor({
        monsterName = "Unknown",
        minimumLife = 0,
        currentLife = 100,
        //isAlive = (this.currentLife >= this.minimumLife) ? true : false
    }) {
        this.monsterName = monsterName
        this.minimumLife = minimumLife
        this.currentLife = currentLife
        this.isAlive = (this.currentLife >= this.minimumLife) ? true : false
        console.log("Monster initialized!");
    }
  
    updateLife = (lifeChangeAmount) => {
        this.currentLife = this.currentLife - lifeChangeAmount
        /*if(this.currentLife<0){
            this.currentLife = 0;
            this.isAlive = false;
        }
        if(this.currentLife > this.minimumLife){
            this.isAlive = true;
        }*/
        this.currentLife < 0 ? this.currentLife = 0 : this.currentLife = this.currentLife;
        this.currentLife < 0 ? this.isAlive = false : this.isAlive = true;
        this.currentLife > this.minimumLife ? this.isAlive = true : this.isAlive = false;
       

    };

    randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
        let r= Math.floor(Math.random() * (maximumLifeDrain+1 - minimumLifeDrain) ) + minimumLifeDrain;

        this.updateLife(r)
        
        console.log(`${this.monsterName} random power drain of ${r}`)
    };
  };

