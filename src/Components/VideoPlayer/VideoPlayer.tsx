/* eslint-disable @typescript-eslint/no-explicit-any */
import "./VideoPlayer.css";
import video from "../../assets/techvideo.mp4";
import { useRef } from "react";

interface VideoPlayerProps {
  playerState: boolean;
  setPlayerState: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoPlayer = ({ playerState, setPlayerState }: VideoPlayerProps) => {
  const player = useRef(null);

  const closePlayer = (e: any) => {
    if (e.target === player.current) {
      setPlayerState(false);
    }
  };

  return (
    <div
      className={`video-player ${playerState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
