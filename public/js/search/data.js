let count = 0

/**
 * Defaults values for
 * @content-one `show`
 * @content-two `none`
 * @content-three `none`
 */

$(document).ready(function () {
  $('.change-page').click(function () {
    count++
    console.log(count)
    if (count === 1) {
      $('.content-one').toggle()
      $('.content-two').toggle()
    }

    if (count === 2) {
      $('.content-two').toggle()
      $('.content-three').toggle()
    }

    if (count === 3) {
      $('.content-three').toggle()
      $('.content-one').toggle()

      // resets the counter
      count = 0
    }
  })
})

// When clicked on home return to search filter
$('div.navbar').click(function () {
  window.location.replace('/search/')
})
