const refs = {
     clockFaceDays: document.querySelector('.value[data-value="days"]'),
     clockFaceHours : document.querySelector('.value[data-value="hours"]'),
     clockFaceMinutes : document.querySelector('.value[data-value="mins"]'),
     clockFaceSecond : document.querySelector('.value[data-value="secs"]'),
     clockFace : document.getElementById("timer-1"),
  };
  class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
    }
    setInt = setInterval(() => {
      const nowDate = Date.now();
      const time = this.targetDate - nowDate;
      this.updateClockface(time);
      this.timeFinish(time);
    }, 1000);
    updateClockface(time) {
      const clockFaceDays = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const clockFaceHours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const clockFaceMinutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const clockFaceSecond = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      refs.clockFaceDays.textContent = `${clockFaceDays}`;
      refs.clockFaceHours.textContent = `${clockFaceHours}`;
      refs.clockFaceMinutes.textContent = `${clockFaceMinutes}`;
      refs.clockFaceSecond.textContent = `${clockFaceSecond}`;
    }
    pad(value) {
      return String(value).padStart(2, "0");
    }
    timeFinish(time) {
      if (time < 0) {
        clearInterval(this.setInt);
        refs. clockFace .textContent = "Finish";
      }
    }
  };
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Sep 18, 2021"),
  });