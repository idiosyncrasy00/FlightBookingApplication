import React from 'react'

const styles = {
  containerSection: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `80%`,
    backgroundColor: `blue`,
  },
  leftSection: {

  },
  rightSection: {

  }
};

const Footer = () => {
  return (
    <div style={styles.containerSection}>
      <div style={styles.leftSection}>
        abcd
      </div>
      <div style={styles.rightSection}>
        xyzd
      </div>
    </div>
  )
}

export default Footer