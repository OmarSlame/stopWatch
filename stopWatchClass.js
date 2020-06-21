//stop watch using class

class Timer {

    constructor() {
        this.time = 0;
        this.timerID = 0;

    }


    start() {
        var that = this;
        this.timerID = window.setInterval(function () {
            document.getElementById("t").innerHTML = that.time++;//this keyword inside this function not the same outside it
            //if we try to replace that with this , undefind++ will happen and Nan will return
        }, 1000);
    }

    stop() {
        window.clearInterval(this.timerID);
    }

    reset() {
        window.clearInterval(this.timerID);
        this.time = 0;
        document.getElementById("t").innerHTML = this.time;
    }

    resume() {
        this.start();
    }

    interval() {
        document.getElementById("interval").innerHTML = "interval:" + this.time;
    }
}

let timer1 = new Timer();
let timer2 = new Timer();

