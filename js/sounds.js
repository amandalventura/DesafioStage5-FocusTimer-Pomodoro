export function Sound({
  soundChoiceCoffeeShop,
  soundChoiceFireplace,
  soundChoiceForest,
  soundChoiceRain
}) {
  const soundForest = new Audio('sounds/Forest.wav')
  const soundRain = new Audio('sounds/Rain.wav')
  const soundCoffeeShop = new Audio('sounds/CoffeeShop.wav')
  const soundFireplace = new Audio('sounds/Fireplace.wav')

  soundForest.loop = true
  soundRain.loop = true
  soundCoffeeShop.loop = true
  soundFireplace.loop = true

  function pressForest () {
    soundForest.play()
    soundRain.pause()
    soundCoffeeShop.pause()
    soundFireplace.pause()
    soundChoiceForest.classList.add('button-on')
    soundChoiceRain.classList.remove('button-on')
    soundChoiceCoffeeShop.classList.remove('button-on')
    soundChoiceFireplace.classList.remove('button-on')
  }

  function pressRain() {
    soundForest.pause()
    soundRain.play()
    soundCoffeeShop.pause()
    soundFireplace.pause()
    soundChoiceRain.classList.add('button-on')
    soundChoiceForest.classList.remove('button-on')
    soundChoiceCoffeeShop.classList.remove('button-on')
    soundChoiceFireplace.classList.remove('button-on')
  }

  function pressCoffeeShop() {
    soundForest.pause()
    soundRain.pause()
    soundCoffeeShop.play()
    soundFireplace.pause()
    soundChoiceRain.classList.remove('button-on')
    soundChoiceForest.classList.remove('button-on')
    soundChoiceCoffeeShop.classList.add('button-on')
    soundChoiceFireplace.classList.remove('button-on')
  }

  function pressFireplace() {
    soundForest.pause()
    soundRain.pause()
    soundCoffeeShop.pause()
    soundFireplace.play()
    soundChoiceRain.classList.remove('button-on')
    soundChoiceForest.classList.remove('button-on')
    soundChoiceCoffeeShop.classList.remove('button-on')
    soundChoiceFireplace.classList.add('button-on')
  }

  return {
    pressForest,
    pressRain,
    pressCoffeeShop,
    pressFireplace
  }
}