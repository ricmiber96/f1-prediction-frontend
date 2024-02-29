const drivers = [

  {
    id: 1,
    name: 'Max Verstappen'
  },
  {
    id: 2,
    name: 'Checo Pérez'
  },
  {
    id: 3,
    name: 'Fernando Alonso'
  },
  {
    id: 4,
    name: 'Lance Stroll'
  },
  {
    id: 5,
    name: 'Carlos Sainz'
  },
  {
    id: 6,
    name: 'Charles Leclerc'
  },
  {
    id: 7,
    name: 'Lewis Hamilton'
  },
  {
    id: 8,
    name: 'George Russell'
  },
  {
    id: 9,
    name: 'Lando Norris'
  },
  {
    id: 10,
    name: 'Oscar Piastri'
  },
  {
    id: 11,
    name: 'Kevin Magnussen'
  },
  {
    id: 12,
    name: 'Nico Hulkenberg'
  },
  {
    id: 13,
    name: 'Alex Albon'
  },
  {
    id: 14,
    name: 'Logan Sargeant'
  },
  {
    id: 15,
    name: 'Valtteri Bottas'
  },
  {
    id: 16,
    name: 'Guanyu Zhou'
  },
  {
    id: 17,
    name: 'Esteban Ocon'
  },
  {
    id: 18,
    name: 'Pierre Gasly'
  }
]

const prediction = [
  {
  	position: 1,
    numberDriver: 15
  },
  {
  	position: 2,
    numberDriver: 9
  },
  {
  	position: 3,
    numberDriver: 8
  },
  {
  	position: 4,
    numberDriver: 2
  }, {
  	position: 5,
    numberDriver: 13
  },
  {
  	position: 6,
    numberDriver: 7
  },
  {
  	position: 7,
    numberDriver: 3
  },
  {
  	position: 8,
    numberDriver: 11
  },
  {
  	position: 9,
    numberDriver: 6
  },
  {
  	position: 10,
    numberDriver: 17
  },
  {
  	position: 11,
    numberDriver: 10
  },
  {
  	position: 12,
    numberDriver: 1
  },
  {
  	position: 13,
    numberDriver: 18
  },
  {
  	position: 14,
    numberDriver: 16
  },
  {
  	position: 15,
    numberDriver: 12
  },
  {
  	position: 16,
    numberDriver: 14
  },
  {
  	position: 17,
    numberDriver: 5
  }, {
  	position: 18,
    numberDriver: 4
  }
]

const racePosition = [
  {
    position: 1,
    numberDriver: 5,
    points: 25
  },
  {
    position: 2,
    numberDriver: 2,
    points: 18
  },
  {
    position: 3,
    numberDriver: 1,
    points: 15
  },
  {
    position: 4,
    numberDriver: 6,
    points: 12
  },
  {
    position: 5,
    numberDriver: 10,
    points: 10
  },
  {
    position: 6,
    numberDriver: 15,
    points: 8
  },
  {
    position: 7,
    numberDriver: 12,
    points: 6
  },
  {
    position: 8,
    numberDriver: 17,
    points: 4
  },
  {
    position: 9,
    numberDriver: 4,
    points: 2
  },
  {
    position: 10,
    numberDriver: 8,
    points: 1
  },
  {
    position: 11,
    numberDriver: 11,
    points: 0
  },
  {
    position: 12,
    numberDriver: 3,
    points: 0
  },
  {
    position: 13,
    numberDriver: 13,
    points: 0
  },
  {
    position: 14,
    numberDriver: 9,
    points: 0
  },
  {
    position: 15,
    numberDriver: 7,
    points: 0
  },
  {
    position: 16,
    numberDriver: 18,
    points: 0
  },
  {
    position: 17,
    numberDriver: 14,
    points: 0
  },
  {
    position: 18,
    numberDriver: 16,
    points: 0
  }
]
let playerPuntuation = 0

const punctuation = () => {
  for (let i = 0; i < racePosition.length; i++) {
    if (racePosition[i].numberDriver === prediction[i].numberDriver) {
      playerPuntuation = playerPuntuation + racePosition[i].points
      console.log('Acertado', playerPuntuation)
    } else if (racePosition[i].numberDriver !== prediction[i].numberDriver && i <= 10) {
      playerPuntuation = playerPuntuation + (racePosition[i].points / 2)
      console.log('No acertado', playerPuntuation)
    }
  }

  console.log('Punt', playerPuntuation)
}

const findDriverIndex = (numberDriver) => {
  return racePosition.findIndex(driver => driver.numberDriver === numberDriver)
}

// Map predictions and add index position from racePosition
const predictionsWithIndex = prediction.map((predictedDriver, i) => {
  let index = findDriverIndex(predictedDriver.numberDriver)
  index += 1
  return { ...predictedDriver, index }
})

console.log(predictionsWithIndex)
let puntuation = 0

const puntuationArray = predictionsWithIndex.map((driver, i) => {
  console.log('Driver', driver.index)
  if (driver.index <= 10 && i < 10) {
    console.log('driver menor')
    if (driver.index === driver.position) {
      puntuation = puntuation + racePosition[i].points
    } else {
      console.log('Sumamos', racePosition[driver.index - 1].points / 2)
      puntuation = puntuation + racePosition[driver.index - 1].points / 2
    }
  }
  return { puntuation }
})

console.log(puntuationArray)

punctuation()
