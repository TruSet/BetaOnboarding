export const modalStyles = () => ({
  background: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'fixed',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: 0,
  },
  modalBody: {
    backgroundColor: '#fff',
    padding: 10,
    maxWidth: 480,
    width: '80%',
    zIndex: 11,
  },
  button: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 120,
  }
})
