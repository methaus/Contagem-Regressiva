const spinnerLoading = document.querySelector("#loading")
const countDownContainer = document.querySelector("#countdown")
const nextYearContainer = document.querySelector("#year")
const daysContainer = document.querySelector("#days")
const hoursContainer = document.querySelector("#hours")
const minutesContainer = document.querySelector("#minutes")
const secondsContainer = document.querySelector("#seconds")

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? "0" + unit : unit

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {
	daysContainer.textContent = days
	hoursContainer.textContent = getTimeUnit(hours)
	minutesContainer.textContent = getTimeUnit(minutes)
	secondsContainer.textContent = getTimeUnit(seconds)
}

const updateCountDown = () => {
	const currentTime = new Date()
	const difference = newYearTime - currentTime
	const days = Math.floor(difference / 86400000)
	const hours = Math.floor(difference / 3600000) % 24
	const minutes = Math.floor(difference / 60000) % 60
	const seconds = Math.floor(difference / 1000) % 60

	insertCountDownValues({ days, hours, minutes, seconds })
}

const constHandleCountDownDisplay = () => {
	spinnerLoading.remove()
	countDownContainer.style.display = "flex"
} 

// EXECUÇÂO
setTimeout(constHandleCountDownDisplay, 1000)
setInterval(updateCountDown, 1000)