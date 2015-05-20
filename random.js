/*
 *   masterASP
 *   Javascript Competency Test
 *   by Ricardo Martinez Montes
 */

module.exports = {
    min: 0,
    max: 100,
    time: 4000,
    randomNumber: 0,
    init: function(){
        var self = this;
        this.timer = setInterval(function(){
            self.randomNumber = Math.floor(Math.random() * (self.max - self.min + 1) + self.min);
        }, this.time);
    },
    getRandom: function(){
        return this.randomNumber;
    },
    setNewTime: function(time) {
        this.time = time;
        clearInterval(this.timer);
        this.init();
    }
};
