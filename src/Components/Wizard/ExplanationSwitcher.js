import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ExplanationSwitcher extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showImage: true
    }
  }

  toggleImage() {
    this.setState({
      showImage: !this.state.showImage
    })
  }

  render() {

    let explanationMedium;
    let changeIcon;
    let changeText;
    if (this.state.showImage) {
      explanationMedium = <Image img_url={this.props.partData.img_url} />
      changeIcon = <FontAwesomeIcon
        icon="video"
        className='switchIcon'
      />;
      changeText = 'VIDEO';
    } else {
      explanationMedium = <Video video_url={this.props.partData.video_url} />
      changeIcon = <FontAwesomeIcon
        icon="image"
        className='switchIcon'
      />
      changeText = 'AFBEELDING';
    }

    return(
      <div className='explanationSwitcher'>
        <div className='explanationItem'>
          {explanationMedium}
        </div>
        <a onClick={this.toggleImage.bind(this)}>
          {changeIcon}&nbsp;&nbsp;&nbsp;{changeText}
        </a>
      </div>
    )

  }

}

const Image = props => {

  return(
    <div>
      <img src={props.img_url} alt='explanation' className='measureImg' />
    </div>
  )
}

const Video = props => {
  return(
    <div>
      <iframe className='videoYoutube' src={props.video_url} title='explanation' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </div>
  )
}

export default ExplanationSwitcher;
