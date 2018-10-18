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
  button: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 120,
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
  },
  headerRoot: {
    padding: '0 24px',
  },
  modalBody: {
    backgroundColor: '#fff',
    padding: 10,
    maxHeight: '100vh',
    maxWidth: 480,
    minWidth: 375,
    overflow: 'auto',
    width: '80%',
    zIndex: 11,
  },
})
