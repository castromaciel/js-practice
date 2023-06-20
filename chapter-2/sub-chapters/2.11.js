const CarState = Object.freeze({
  ENGINE_OFF: 0,
  ENGINE_ON_CAR_STOPPED: 1,
  ENGINE_ON_CAR_RUNNING: 2,
})

const state = document.getElementById('state')

class Car {
  /**
   * @param {HTMLElement} stateDOM 
   * @param {CarState} carState 
   */
  constructor(stateDOM) {
    this.stateDOM = stateDOM
    this.carState = CarState.ENGINE_OFF
  }

  /**
   * @param {MouseEvent} event 
   */
  changeState(event) {
    const newState = event.target.id
    let changeState = false;

    switch (newState) {
      case 'turn-on':
        if (this.carState === CarState.ENGINE_OFF) {
          this.carState = CarState.ENGINE_ON_CAR_STOPPED
          changeState = true
          console.log({ changeState })
        }
        break;
      case 'ride':
        if (this.carState === CarState.ENGINE_ON_CAR_STOPPED) {
          this.carState = CarState.ENGINE_ON_CAR_RUNNING
          changeState = true
        }
        break;
      case 'stop':
        if (this.carState === CarState.ENGINE_ON_CAR_RUNNING) {
          this.carState = CarState.ENGINE_ON_CAR_STOPPED
          changeState = true
        }
        break;
      default:
        if (this.carState === CarState.ENGINE_ON_CAR_STOPPED) {
          this.carState = CarState.ENGINE_OFF
          changeState = true
        }
        break;
    }
    if(changeState) {
      let p = document.createElement('p')
      switch(this.carState) {
        case CarState.ENGINE_OFF:
          p.append('The engine is off')
          break;
        case CarState.ENGINE_ON_CAR_STOPPED:
          p.append('The engine is running, and car stopped')
          break;
        case CarState.ENGINE_ON_CAR_RUNNING:
          p.append('The engine is running and car moving')
          break;
        default:
          p.append('The engine is off')
          break;
      }
      this.stateDOM.append(p)
    }
  }
}

const turnOn = document.getElementsByTagName('button')[0]
const ride = document.getElementsByTagName('button')[1]
const stop = document.getElementsByTagName('button')[2]
const turnOff = document.getElementsByTagName('button')[3]

const car = new Car(state)
const handlerEvent = car.changeState.bind(car)

turnOn.addEventListener('click', handlerEvent)
ride.addEventListener('click', handlerEvent)
stop.addEventListener('click', handlerEvent)
turnOff.addEventListener('click', handlerEvent)
