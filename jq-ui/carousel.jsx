import React, { Component, PropTypes, findDOMNode} from 'react';
import RetinaImage from 'react-retina-image';
import cn from 'classnames';
import UI from 'components/ui';
import Swipeable from 'react-swipeable';

import 'styles/property/carousel';

export default class Carousel extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    const {images} = this.props;

    this.state = {
      navTransform: 0,
      currentSlide: 0,
      imagesLastIndex: images.length - 1,
      imagesLength: images.length,
      navWidth: 0,
      navItemWidth: 0,
      sliderWidth: 0,
      imgLoaded: 0,
      // images: [].concat(images[images.length - 1], images, images[0]),
      images,
    };

    this.updateWidth = ::this.updateWidth;
    window.addEventListener(`resize`, this.updateWidth);
  }

  animateNav(slideToAnimate) {
    const {currentSlide, imagesLastIndex, navWidth, sliderWidth} = this.state;
    const slider = findDOMNode(this.refs.slider);
    let direction;
    let transform;

    const navItemWidth = findDOMNode(this.refs[`navItem${slideToAnimate}`]).clientWidth;

    if (currentSlide > slideToAnimate) {
      direction = `left`;
    } else if (currentSlide < slideToAnimate) {
      direction = `right`;
    } else return;

    if (sliderWidth >= navWidth) return;

    const sliderOffset = Math.floor(slider.getBoundingClientRect()[direction]);
    const navItemOffset = Math.floor(findDOMNode(this.refs[`navItem${slideToAnimate}`]).getBoundingClientRect()[direction]);
    const delta = Math.floor(sliderOffset - navItemOffset);
    transform = direction === `right` ? delta - navItemWidth : delta + navItemWidth;


    if (delta < navItemWidth && slideToAnimate < imagesLastIndex && slideToAnimate > 0) {
      if (direction === `left` && transform < 0) return;
      if (direction === `right` && transform > 0) return;

      this.setState({
        navTransform: this.state.navTransform + transform,
      });
    }

    if (slideToAnimate === 0) {
      this.slideNavToStart();
    }

    if (slideToAnimate === imagesLastIndex) {
      this.slideNavToEnd();
    }
  }

  slideNavToStart() {
    this.setState({
      navTransform: 0,
    });
  }

  slideNavToEnd() {
    const {sliderWidth, navWidth} = this.state;
    const navTransform = sliderWidth - navWidth;
    this.setState({
      navTransform,
    });
  }

  onImgLoad() {
    const {imgLoaded, imagesLength} = this.state;
    if (imgLoaded + 1 === imagesLength) {
      this.updateWidth();
      return;
    }
    this.setState({
      imgLoaded: imgLoaded + 1,
    });
  }

  updateWidth() {
    const {imagesLength} = this.state;
    const sliderWidth = findDOMNode(this.refs.slider).offsetWidth;

    let navWidth = 0;
    for (let index = 0; index < imagesLength; index++) {
      const width = findDOMNode(this.refs[`navItem${index}`]).clientWidth;
      navWidth += width;
    }

    this.setState({
      // navItemWidth: navItemWidth,
      navWidth,
      sliderWidth,
    });
  }

  slideTo(index) {
    if (this.state.currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
      this.animateNav(index);
    }
  }

  onBtnClick(index) {
    if (index < 0) {
      this.setState({ currentSlide: this.props.images.length - 1 });
      this.animateNav(this.props.images.length - 1);
    } else if (index >= this.props.images.length) {
      this.setState({ currentSlide: 0 });
      this.animateNav(0);
    } else {
      this.setState({ currentSlide: index });
      this.animateNav(index);
    }
  }

  fullscreenToggle() {
    this.setState({
      fullscreen: !this.state.fullscreen,
    });
  }

  onNavBtnClick(direction) {
    // this.updateWidth();
    const {sliderWidth, navItemWidth, navWidth} = this.state;
    let transform;

    if (navWidth <= sliderWidth) return;

    if (navWidth - sliderWidth <= sliderWidth) {
      // если влезает в 1 прокрутку
      if (direction === `left`) {
        this.slideNavToStart();
      } else if (direction === `right`) {
        this.slideNavToEnd();
      }
    } else {
      // если не влезает в 1 прокрутку
      // доводчик, если не влезает в длину навбара
      const slideCount = Math.floor(sliderWidth / navItemWidth);
      const offset = sliderWidth - slideCount * navItemWidth;

      if (direction === `right`) {
        transform = - sliderWidth + offset;

        if (this.state.transform + transform <= sliderWidth - navWidth) {
          // to end
          transform = sliderWidth - navWidth;
          this.setState({
            navTransform: transform,
          });
          return;
        }

        this.setState({
          navTransform: this.state.navTransform + transform,
        });
      } else if (direction === `left`) {
        transform = sliderWidth - offset;

        if (this.previousTransform + transform >= 0) {
          // to start
          this.slideNavToStart();
          return;
        }

        this.setState({
          navTransform: this.state.navTransform + transform,
        });
      }
    }
  }

  slideSwipedRight() {
    this.onBtnClick(`left`);
  }

  slideSwipedLeft() {
    this.onBtnClick(`right`);
  }

  navSwipedRight() {
    this.onNavBtnClick(`left`);
  }

  navSwipedLeft() {
    this.onNavBtnClick(`right`);
  }

  render() {
    const {fullscreen, currentSlide, navTransform, sliderWidth, navWidth} = this.state;

    const containerStyle = {
      transform: `translateX(${-100 * currentSlide}%)`,
      WebkitTransform: `translateX(${-100 * currentSlide}%)`,
      msTransform: `translateX(${-100 * currentSlide}%)`,
    };

    const navStyle = {
      transform: `translateX(${navTransform}px)`,
      WebkitTransform: `translateX(${navTransform}px)`,
      msTransform: `translateX(${navTransform}px)`,
    };


    return (
      <div className={cn(`carousel`, {'is-fullscreen': fullscreen})} ref="slider">
        <div className="carousel-track">
          <Swipeable onSwipedLeft={::this.slideSwipedLeft} onSwipedRight={::this.slideSwipedRight}>
            <div style={containerStyle} onClick={this.onBtnClick.bind(this, `right`)} className="carousel-track-container" ref="sliderWrapper">
              {this.state.images.map((item, index) =>
                <div className="carousel-track-slide" key={index}>
                  <RetinaImage src={item.original} alt={item.id} />
                </div>
              )}
            </div>
          </Swipeable>
          <button className="carousel-track-btn carousel-track-btn--left" onClick={this.onBtnClick.bind(this, currentSlide - 1)}>
            <UI.Icon className="carousel-track-btn-icon" icon="chevron-left"/>
          </button>
          <button className="carousel-track-btn carousel-track-btn--right" onClick={this.onBtnClick.bind(this, currentSlide + 1)}>
            <UI.Icon className="carousel-track-btn-icon" icon="chevron-right"/>
          </button>
          <button className="carousel-track-btn carousel-track-btn--fullscreen" onClick={::this.fullscreenToggle}>
            <UI.Icon className="carousel-track-btn-icon" icon={fullscreen ? `fullscreen-open` : `fullscreen-closed`}/>
          </button>
        </div>

        <div className="carousel-nav">
          <Swipeable onSwipedLeft={::this.navSwipedLeft} onSwipedRight={::this.navSwipedRight}>
            <div style={navStyle} className="carousel-nav-container" ref="nav">
              {this.state.images.map((item, index) => {
                // не будут рендерится склонированные элементы
                // if (index === 0 || index === this.state.images.length - 1) {
                  // return null;
                  // }
                return (
                  <div className={cn(`carousel-nav-item`, {'is-active': index === currentSlide})} onClick={this.slideTo.bind(this, index)} ref={`navItem${index}`} key={index}>
                    <RetinaImage src={item.thumb} alt={item.id} onLoad={::this.onImgLoad}/>
                  </div>
                );
              })}
            </div>
          </Swipeable>
          <button className={cn(`carousel-nav-btn`, `carousel-nav-btn--left`, {'is-disabled': navTransform === 0 || sliderWidth - navWidth > 0})} onClick={this.onNavBtnClick.bind(this, `left`)}>
            <UI.Icon className="carousel-nav-btn-icon" icon="chevron-left"/>
          </button>
          <button className={cn(`carousel-nav-btn`, `carousel-nav-btn--right`, {'is-disabled': navTransform === sliderWidth - navWidth || sliderWidth - navWidth > 0})} onClick={this.onNavBtnClick.bind(this, `right`)}>
            <UI.Icon className="carousel-nav-btn-icon" icon="chevron-right"/>
          </button>
        </div>
      </div>
    );
  }
}
