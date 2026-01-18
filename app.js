const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
let mode = 'full'

const bindMode = (name) => {
  return () => {
    mode = name
    update()
  }
}

fullBtn.addEventListener('click', bindMode('full'))

dateBtn.addEventListener('click', bindMode('date'))

timeBtn.addEventListener('click', bindMode('time'))

const format = (formatMode) => {
  const now = new Date()
  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString()
    case 'date':
      return now.toLocaleDateString()
    case 'full':
      return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
  }
}

function update() {
  output.textContent = format(mode)
}

update()

setInterval(update, 1000)
