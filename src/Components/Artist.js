import React from 'react';

class Artist extends React.Component {
  render () {
    return (
      <div className="artist-card">
        <img src={this.props.image} alt={this.props.alt}></img>
        <p>{this.props.name}</p>
        <p>{this.props.songName}</p>
      </div>
    )
  }
}

export default Artist;