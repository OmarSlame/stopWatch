
// stop watch using litral object
const timer = {
    timerID: 0,
    time: 0,


    start: function () {

        let that = this;
        this.timerID = window.setInterval(function () {
            document.getElementById("t").innerHTML = that.time++;//this keyword inside this function not the same outside it
            //if we try to replace that with this , undefind++ will happen and Nan will return

        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.timerID);
    },

    reset: function () {

        window.clearInterval(this.timerID);
        this.time = 0;
        document.getElementById("t").innerHTML = this.time;
    },
    interval: function () {
        document.getElementById("interval").innerHTML = "interval:" + this.time;
    },
    resume: function () {
        this.start();
    }



}




















