export default {
  RECORD_SCROLL_POSITION ({ scroll }) {
    scroll.y = window.scrollY
  },
  TOGGLE_MENU ({ menu }) {
    menu.isOpen = !menu.isOpen
  },
  OPEN_EMAIL_COLLECTION ({ emailCollection }) {
    emailCollection.isOpen = true
  },
  CLOSE_EMAIL_COLLECTION ({ emailCollection }) {
    emailCollection.isOpen = false
  }
}
