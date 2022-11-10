function renderFooter () {
  const body = document.getElementById('body')
  // create footer
  const footer = document.createElement('footer')
  body.appendChild(footer)
  footer.setAttribute('id', 'footer')
  footer.setAttribute('class', 'btn btn-outline-light d-flex justify-content-between')
  footer.style.bottom = '0'
  footer.style.position = 'fixed'
  footer.style.width = '100%'
  const footerById = document.getElementById('footer')
  footerById.style.border = 'none'
  footerById.style.fontSize = '15px'
  footerById.style.color = 'black'
  footerById.style.backgroundColor = 'transparent'
  // create "Developed By part"
  const devBy = document.createElement('div')
  footer.appendChild(devBy)
  devBy.textContent = 'Developed by Victoria Kapelush'
  const devCopy = document.createElement('div')
  footer.appendChild(devCopy)
  devCopy.setAttribute('id', 'copyright')
  devCopy.textContent = 'Copyright © 2022'
  // two icons with links
  const divIcons = document.createElement('div')
  footer.appendChild(divIcons)
  // github icon-link
  const githubLink = document.createElement('a')
  const githubImg = document.createElement('img')
  divIcons.appendChild(githubLink)
  githubLink.appendChild(githubImg)
  githubLink.setAttribute('href', 'https://github.com/victoriakapelush')
  githubLink.setAttribute('target', '_blank')
  githubImg.setAttribute('class', 'footer-img')
  githubImg.setAttribute('src', 'https://img.icons8.com/ios-filled/50/null/github.png')
  // linkedIn icon-link
  const linkedinLink = document.createElement('a')
  const linkedinImg = document.createElement('img')
  divIcons.appendChild(linkedinLink)
  linkedinLink.appendChild(linkedinImg)
  linkedinLink.setAttribute('href', 'https://www.linkedin.com/in/vickyvickyk/')
  linkedinLink.setAttribute('target', '_blank')
  linkedinImg.setAttribute('class', 'footer-img')
  linkedinImg.setAttribute('src', 'https://img.icons8.com/ios/50/null/linkedin-circled--v1.png')

  // increase size of icons when mouse is over them

  const footerImg = document.querySelectorAll('.footer-img')
  for (let i = 0; i < footerImg.length; i++) {
    footerImg[i].style.height = '22px'
    footerImg[i].style.width = '22px'
  }

  for (let i = 0; i < footerImg.length; i++) {
    footerImg[i].onmouseover = function () {
      footerImg[i].style.height = '24px'
      footerImg[i].style.width = '24px'
    }
  }

  for (let i = 0; i < footerImg.length; i++) {
    footerImg[i].onmouseout = function () {
      footerImg[i].style.height = '22px'
      footerImg[i].style.width = '22px'
    }
  }

  const copyright = document.getElementById('copyright')
  copyright.style.paddingRight = '65px'
}

export default renderFooter
