import {Sound} from "./sounds.js"
import {Timer} from "./timer.js"
import {Controls} from "./controls.js"
import {Events} from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  minutesDisplay,
  secondsDisplay,
  soundChoiceForest,
  soundChoiceRain,
  soundChoiceCoffeeShop,
  soundChoiceFireplace
} from "./elements.js"

const sound = Sound ({
  soundChoiceCoffeeShop,
  soundChoiceFireplace,
  soundChoiceForest,
  soundChoiceRain
})

const controls = Controls ({
  buttonPlay,
  buttonPause,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

Events ({
  controls,
  timer,
  sound,
  buttonPlay,
  buttonDecrease,
  buttonPause,
  buttonStop,
  buttonIncrease,
  soundChoiceForest,
  soundChoiceRain,
  soundChoiceCoffeeShop,
  soundChoiceFireplace
})



