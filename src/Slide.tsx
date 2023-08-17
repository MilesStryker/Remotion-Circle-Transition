import {useCurrentFrame, interpolate, useVideoConfig, Img, staticFile, Sequence} from 'remotion';


//--------------
// still working on this one
//--------------


export const SlideToRight = () => { 
  const frame = useCurrentFrame();
  const {width: w} = useVideoConfig();

  const contentADuration = 60 // frame duration for content A and end of transition
  const contentBDuration = 60 // frame duration for content B

  const transitionTime = 20 // frame duration for transition, basically overlaps contentB over the end of contentA

  const Progress = interpolate(
    frame,
    [(contentADuration - transitionTime), contentADuration],
    [0, w]
  )
  


  const contentA = <Img
  src = {staticFile("office.jpeg")} // for the first image/gif
  />
  const contentB = <Img
    src = {staticFile("office2.jpg")} // for the second image/gif
  />
  
  const rectangleShape = "inset(0px 0px 0px" + Progress + "px)" //doesn't work for some reason, gotta try something else 

  return (
    <>
      <Sequence durationInFrames={contentADuration}>
        <div>
          {contentA}
        </div>
      </Sequence>
      <Sequence from={(contentADuration - transitionTime)} durationInFrames={contentBDuration} >
        <div style={{
          
          
          clipPath: rectangleShape
        }}>
          {contentB}
        </div>
      </Sequence>
    </>
  );
}