import { useEffect, useRef } from "react";

 export const YoutubeVideoPlayer = () => {
  const playerRef = useRef(null);
  const hasStoppedRef = useRef(false);

  useEffect(() => {
    // Load YouTube IFrame API once
    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    // API ready callback
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        height: "500",
        width: "100%",
        videoId: "CKgDta5ACWA",
        playerVars: {
          autoplay: 0,
          controls: 1,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    return () => {
      // Cleanup on unmount
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const onPlayerReady = (event) => {
    // Optional: auto-play
    // event.target.playVideo();
    console.log("Player is ready");
  };

  const onPlayerStateChange = (event) => {
    // Example: stop after 6 seconds (demo logic)
    if (
      event.data === window.YT.PlayerState.PLAYING &&
      !hasStoppedRef.current
    ) {
      setTimeout(() => {
        event.target.stopVideo();
        hasStoppedRef.current = true;
      }, 6000);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">
          Course Video
        </h2>

        <div id="yt-player" />
      </div>
    </div>
  );
};

 