export function Events ({
  controls,
  timer,
  sound,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  soundChoiceForest,
  soundChoiceRain,
  soundChoiceCoffeeShop,
  soundChoiceFireplace
}) {

buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', function() {
  timer.reset()
  controls.reset()
})

buttonIncrease.addEventListener('click', function() {
  timer.increase()
})

buttonDecrease.addEventListener('click', function() {
  timer.decrease()
})

soundChoiceForest.addEventListener('click', function() {
  sound.pressForest()
})

soundChoiceRain.addEventListener('click', function() {
  sound.pressRain()
})

soundChoiceCoffeeShop.addEventListener('click', function() {
  sound.pressCoffeeShop()
})

soundChoiceFireplace.addEventListener('click', function() {
  sound.pressFireplace()
})
}