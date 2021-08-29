const refs={
	timer: document.querySelector('#timer-1'),
	amountDays: document.querySelector('.value[data-value="days"]'),
	amountHours: document.querySelector('.value[data-value="hours"]'),
	amountMinutes: document.querySelector('.value[data-value="mins"]'),
	amountSeconds: document.querySelector('.value[data-value="secs"]'),
}

class CountdownTimer {
	constructor({ selector, targetDate }) {
		this.selector = selector;
		this.targetDate = targetDate;
		this.timerId = null;
	}
		timerId=setInterval(() => {
			const currentTime = Date.now();
			const timeDifference = this.targetDate - currentTime;
			this.getTimeComponents(timeDifference);
			this.endOfTime(timeDifference);
		}, 1000);

		pad(value) {
	return String(value).padStart(2, '0');
}

		getTimeComponents(time){
	/*
	 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
	 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
	 */
	const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

	/*
	 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
	 * остатка % и делим его на количество миллисекунд в одном часе
	 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
	 */
	const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

	/*
	 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
	 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
	 */
	const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

	/*
	 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
	 * миллисекунд в одной секунде (1000)
	 */
	const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
			refs.amountDays.textContent = `${days}`;
			refs.amountHours.textContent = `${hours}`;
			refs.amountMinutes.textContent = `${mins}`;
			refs.amountSeconds.textContent = `${secs}`;
	}
	endOfTime(time) {
		if (time < 0) {
			clearInterval(this.timerID);
			refs.timer.textContent = "Countdown is over"
		}
	}
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 28, 2021'),
});


