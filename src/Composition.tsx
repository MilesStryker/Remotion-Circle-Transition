import {useCurrentFrame, interpolate, useVideoConfig, Img, staticFile, Sequence} from 'remotion';

export function CircleTransitionOut(){
//export const CircleTransitionOut = () => { 
  const frame = useCurrentFrame();
  const {width: w} = useVideoConfig();

  const contentADuration = 60 // frame duration for content A and end of transition
  const contentBDuration = 60 // frame duration for content B

  const transitionTime = 20 // frame duration for transition, basically overlaps contentB over the end of contentA

  const Progress = interpolate(
    frame,
    [contentADuration - transitionTime, contentADuration],
    [0, w]
  )
  


  const contentA = <Img
  src = {staticFile("office.jpeg")} // for the first image/gif
  />
  const contentB = <Img
    src = {staticFile("office2.jpg")} // for the second image/gif
  />
  
  const circleShape = "circle(" + Progress + "px)"

  return (
    <>
      <Sequence durationInFrames={contentADuration}>
        <div>
          {contentA}
        </div>
      </Sequence>
      <Sequence from={(contentADuration - transitionTime)} durationInFrames={contentBDuration} >
        <div style={{
          clipPath: circleShape
        }}>
          {contentB}
        </div>
      </Sequence>
    </>
  );
}