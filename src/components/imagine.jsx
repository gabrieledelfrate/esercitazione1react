import Car from 'react';
import '../App.css';

class ImageComponent extends Car.Component {
    render() {
      const { src, alt } = this.props;
      return <img src={src} alt={alt} />;
    }
  }

  export { ImageComponent };