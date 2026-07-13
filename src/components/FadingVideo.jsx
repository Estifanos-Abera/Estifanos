import React from 'react';

class FadingVideo extends React.Component {
  static FADE_MS = 800; // slightly longer fade for smoother transition
  static FADE_OUT_LEAD = 0.8; // seconds before end to start fade out

  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.rAF = null;
    this.fadingOut = null;
  }

  componentDidMount() {
    const v = this.videoRef.current;
    if (v) {
      v.addEventListener("loadeddata", this.onLoad);
      v.addEventListener("timeupdate", this.onTime);
      v.addEventListener("ended", this.onEnd);
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
    const v = this.videoRef.current;
    if (v) {
      v.removeEventListener("loadeddata", this.onLoad);
      v.removeEventListener("timeupdate", this.onTime);
      v.removeEventListener("ended", this.onEnd);
    }
  }

  fadeTo = (target, duration) => {
    cancelAnimationFrame(this.rAF);
    const start = performance.now();
    const v = this.videoRef.current;
    if (!v) return;
    const from = parseFloat(v.style.opacity || '0');
    
    const step = (now) => {
      const prog = Math.min((now - start) / duration, 1);
      if (v) {
        v.style.opacity = (from + (target - from) * prog).toString();
      }
      if (prog < 1) {
        this.rAF = requestAnimationFrame(step);
      }
    };
    this.rAF = requestAnimationFrame(step);
  };

  onLoad = () => {
    const v = this.videoRef.current;
    if (!v) return;
    v.style.opacity = '0';
    v.play().catch(err => console.log("Video auto-play block:", err));
    this.fadeTo(1, FadingVideo.FADE_MS);
  };

  onTime = () => {
    const v = this.videoRef.current;
    if (!v || !v.duration) return;
    const remaining = v.duration - v.currentTime;
    if (!this.fadingOut && remaining <= FadingVideo.FADE_OUT_LEAD) {
      this.fadingOut = true;
      this.fadeTo(0, FadingVideo.FADE_MS);
    }
  };

  onEnd = () => {
    const v = this.videoRef.current;
    if (!v) return;
    v.style.opacity = '0';
    setTimeout(() => {
      if (v) {
        v.currentTime = 0;
        v.play().catch(err => console.log("Video replay block:", err));
        this.fadingOut = null;
        this.fadeTo(1, FadingVideo.FADE_MS);
      }
    }, 100);
  };

  render() {
    const { src, className, style } = this.props;
    return (
      <video
        ref={this.videoRef}
        src={src}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={className}
        style={{ ...style, transition: 'none', opacity: 0 }}
      />
    );
  }
}

export default FadingVideo;
