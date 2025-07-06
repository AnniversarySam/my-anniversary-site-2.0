import React, { useRef, useState } from 'react';
import './ProgressHeart.css';

const ProgressHeart = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [value, setValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setValue(val);

    if (val === 100 && audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setValue(0);
    setIsPlaying(false);
  };

  return (
    <div className="progress-wrapper">
      {!isPlaying && (
        <h2 className="progress-title">Slide to the end 💖</h2>
      )}

      {value === 100 && (
        <div className="image-preview">
          <img
            src="/images/moment1.jpg"
            alt="Special Moment"
            className={isPlaying ? 'playing-image' : ''}
          />
          <div className="now-playing">
            {/* Play/pause button on left */}
            <button
              className="play-pause"
              onClick={togglePlayPause}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#e9aac3"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#e9aac3"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Equalizer in the center */}
            <div className={`equalizer ${isPlaying ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Stop button on right */}
            <button
              className="stop-button"
              onClick={handleStop}
              title="Stop"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#e9aac3"
                viewBox="0 0 24 24"
              >
                <path d="M6 6h12v12H6z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {!isPlaying && (
        <div className="progress-line">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className="progress-slider"
          />
        </div>
      )}

      <audio ref={audioRef} src="/audio/love-song.mp3" />
    </div>
  );
};

export default ProgressHeart;
