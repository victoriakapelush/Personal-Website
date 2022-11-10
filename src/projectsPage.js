import aboutPage from './aboutPage'
import contactsPage from './contactsPage'
import homePage from './homePage'
import renderHeader from './renderHeader'
import renderBody from './renderBody'
import renderFooter from './renderFooter'

// eslint-disable-next-line no-unused-vars
// const main = document.getElementById('main')
const body = document.getElementById('body')

function resetProjects () {
  while (body.firstChild) {
    body.firstChild.remove()
  }
}
function projectsPage () {
  resetProjects()
  renderHeader()
  renderBody()
  renderFooter()

  const main = document.createElement('main')
  body.appendChild(main)
  main.setAttribute('id', 'main')

  // const body = document.getElementsByTagName('body')[0]
  // body.style.removeProperty('background-image')

  const aboutBtn = document.getElementsByClassName('aboutBtn')[0]
  aboutBtn.addEventListener('click', function () {
    aboutPage()
  })

  const homeBtn = document.getElementsByClassName('homeBtn')[0]
  homeBtn.addEventListener('click', function () {
    homePage()
  })

  const contactsBtn = document.getElementsByClassName('contactsBtn')[0]
  contactsBtn.addEventListener('click', function () {
    contactsPage()
  })

  const projectsBtn = document.getElementsByClassName('projectsBtn')[0]
  projectsBtn.addEventListener('click', function () {
    projectsPage()
  })

  main.style.display = 'flex'
  main.style.justifyContent = 'center'
  main.style.flexWrap = 'wrap'
  main.style.gap = '20px'

  const imgCalculator = document.createElement('img')
  const calcLink = document.createElement('a')
  main.appendChild(calcLink)
  imgCalculator.setAttribute('src', '/Users/victoria/Desktop/Portfolio/dist/img/calculator.png')
  imgCalculator.style.height = '350px'
  imgCalculator.style.width = '400px'
  calcLink.appendChild(imgCalculator)
  calcLink.setAttribute('href', 'https://rawcdn.githack.com/victoriakapelush/Calculator/918bf4ca49a828aecd9c8f093f03a3de04089af9/index.html')
  calcLink.setAttribute('target', '_blank')
  imgCalculator.onmouseover = function () {
    imgCalculator.style.border = '2px black dotted'
  }
  imgCalculator.onmouseout = function () {
    imgCalculator.style.border = 'none'
  }

  const imgEtch = document.createElement('img')
  const etchLink = document.createElement('a')
  main.appendChild(etchLink)
  imgEtch.setAttribute('src', '/Users/victoria/Desktop/Portfolio/dist/img/etchasketch.png')
  imgEtch.style.height = '350px'
  imgEtch.style.width = '400px'
  etchLink.appendChild(imgEtch)
  etchLink.setAttribute('href', 'https://rawcdn.githack.com/victoriakapelush/Etch-A-Sketch/689d9d09a5df88a2e27f78fe265fc1f071d225d1/index.html')
  etchLink.setAttribute('target', '_blank')
  imgEtch.onmouseover = function () {
    imgEtch.style.border = '2px black dotted'
  }
  imgEtch.onmouseout = function () {
    imgEtch.style.border = 'none'
  }

  const imgTic = document.createElement('img')
  const ticLink = document.createElement('a')
  main.appendChild(ticLink)
  imgTic.setAttribute('src', '/Users/victoria/Desktop/Portfolio/dist/img/tic-tac-toe.png')
  imgTic.style.height = '350px'
  imgTic.style.width = '400px'
  ticLink.appendChild(imgTic)
  ticLink.setAttribute('href', 'https://rawcdn.githack.com/victoriakapelush/Tic-Tac-Toe/74143d2e3abdaee39bee80f421c281fa11f22ddc/index.html')
  ticLink.setAttribute('target', '_blank')
  imgTic.onmouseover = function () {
    imgTic.style.border = '2px black dotted'
  }
  imgTic.onmouseout = function () {
    imgTic.style.border = 'none'
  }

  const imgLib = document.createElement('img')
  const libLink = document.createElement('a')
  main.appendChild(libLink)
  imgLib.setAttribute('src', '/Users/victoria/Desktop/Portfolio/dist/img/virtual-library.png')
  imgLib.style.height = '350px'
  imgLib.style.width = '400px'
  libLink.appendChild(imgLib)
  libLink.setAttribute('href', 'https://htmlpreview.github.io/?https://github.com/victoriakapelush/Virtual-Library/blob/main/index.html')
  libLink.setAttribute('target', '_blank')
  imgLib.onmouseover = function () {
    imgLib.style.border = '2px black dotted'
  }
  imgLib.onmouseout = function () {
    imgLib.style.border = 'none'
  }
}

export default projectsPage
