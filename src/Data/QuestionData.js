function QuestionData(part) {

  let questiondata = {
    'collar': {
      'title': 'collar',
      'prev': '/wizard/navigation',
      'next': '/wizard/shoulders',
      'img_url': require('../Assets/img/collar.png'),
      'video_url': 'https://www.youtube.com/embed/jMo92nh4lII',
      'sizes': [],
    },
    'shoulders': {
      'title': 'shoulders',
      'prev': '/wizard/collar',
      'next': '/wizard/sleeve',
      'img_url': require('../Assets/img/shoulder.png'),
      'video_url': 'https://www.youtube.com/embed/ecaNJmMaHCE',
      'sizes': [],
    },
    'sleeve': {
      'title': 'sleeve',
      'prev': '/wizard/shoulders',
      'next': '/wizard/chest',
      'img_url': require('../Assets/img/sleeve.png'),
      'video_url': 'https://www.youtube.com/embed/xzOZDqyke80',
      'sizes': [],
    },
    'chest': {
      'title': 'chest',
      'prev': '/wizard/sleeve',
      'next': '/wizard/waist',
      'img_url': require('../Assets/img/chest.png'),
      'video_url': 'https://www.youtube.com/embed/TWX1nX7k9bc',
      'sizes': [],
    },
    'waist': {
      'title': 'waist',
      'prev': '/wizard/chest',
      'next': '/wizard/length',
      'img_url': require('../Assets/img/waist.png'),
      'video_url': 'https://www.youtube.com/embed/5H0-9c-9_yE',
      'sizes': [],
    },
    'length': {
      'title': 'length',
      'prev': '/wizard/waist',
      'next': '/wizard/collar',
      'img_url': require('../Assets/img/length.png'),
      'video_url': 'https://www.youtube.com/embed/tOWuI-FsPv8',
      'sizes': [],
    }
  }
  return questiondata[part];
}

export default QuestionData;
