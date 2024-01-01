// const addEventListenerAll = (targets, type, listener, options, useCapture) => {
//   targets.forEach(target =>
//     target.addEventListener(type, listener, options, useCapture)
//   )
// }
//
// // Logs 'Clicked a thumbLink' whenever any anchor element is clicked
// addEventListenerAll(document.querySelectorAll('a'), 'click', () =>
//   alert('Clicked a thumbLink')
// )

const thumbsWrapper = document.querySelector('.thumbsWrapper')
const galleryImg = document.querySelector('.galleryImage')
const galleryCaption = document.querySelector('.figcaption')
const thumbLink = document.querySelector('.thumbLink')

function handleClick() {
  console.log("I got clicked!")
}

function init() {
  document.querySelectorAll(".thumbLink").forEach(element => {
    element.addEventListener("click", updateView)
    element.addEventListener("click", handleClick)
  })
}

function updateView(event) {
// Handle the difference in whether the event is fired on the <a> or the <img>
const targetIdentifier = event.target.firstChild || event.target

const displayNewImage = () => {
  const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`
  galleryImg.src = mainSrc
  galleryCaption.textContent = targetIdentifier.alt
}

// Fallback for browsers that don't support View Transitions:
if (!document.startViewTransition) {
  displayNewImage()
  return
}

// With View Transitions:
const transition = document.startViewTransition(() => displayNewImage())
}

init()