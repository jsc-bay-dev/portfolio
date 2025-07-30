const Vibes = () => {
  return (
    <div>
      <p>What's that?</p>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/PNoDSDKAHf4?si=fIQSeDDmxFiMM6TO" 
        title="YouTube video player" 
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      />
    </div>
  )
}

export default Vibes;