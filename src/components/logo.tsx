import React from 'react';

const styles = {
  paddingLeft: '3em',
  paddingRight: '3em',
};

export function Logo() {
  return (
    <div style={styles}>
      <img src={require('../assets/images/gdsc-logo-and-text.png')} alt="GDSC logo" />
    </div>
  );
}
