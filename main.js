const secondHand = document.querySelector('.second-hand')
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')

const setDate = () => {
  console.log("Hii")
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDeg = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDeg}deg)`

  const hours = now.getHours()
  const hourDeg = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hourDeg}deg)`

  const minutes = now.getMinutes()
  const minuteDeg = ((minutes / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`
  console.log(minutes)
  console.log(minuteDeg)
}

setInterval(setDate, 1000);
