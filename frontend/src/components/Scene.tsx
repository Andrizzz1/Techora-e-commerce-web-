//lights, camera, controll
import { useRef,useEffect } from "react"
import {useFrame, useThree} from '@react-three/fiber'
import {Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Keyboard } from "./MechanicalKeyboard";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
type SceneProps = {
    progress: number;
}

export const Scene = ({progress}: SceneProps)=>{
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    const { size } = useThree();
    const isMobile = size.width < 640;


    //position={[-9.9415,18.5364,8.5707]}
    //position={[-15.1613,-8.7929,1.0565]}
    //position={[3.5022,-21.2549,-0.8169]}
    //position={[6.1298,-24.1253,-8.9922]}
    useFrame(() => {
        // console.log(cameraRef.current?.position)
        cameraRef.current?.lookAt(0, 0, 0);
    });

    useEffect(()=>{
        const updateCamPos=()=>{
            const positions = [
                [16.1792,26.6640,-9.1159],
                [24.170,16.0982,-14.5654],
                [12.7056,-28.1372,-10.1339],
                [10.6303,-29.8300,-7.2798]
            ]
            const segmentProgress=1/2
            const segmentIndex = Math.floor(progress/segmentProgress);
            // console.log(segmentIndex,cameraRef.current)
            // console.log(cameraRef)
            const percentage=(progress%segmentProgress)/segmentProgress

            const [startX,startY, startZ]=positions[segmentIndex];
            const [endX,endY,endZ]=positions[segmentIndex+1];
            const x=startX+(endX-startX)*percentage;
            const y=startY+(endY-startY)*percentage;
            const z=startZ+(endZ-startZ)*percentage;

            if (!cameraRef.current) return;

            gsap.to(cameraRef.current.position,{
                x,
                y,
                z,
                duration:.5,
                ease:'power1.out'
            })
        }

        updateCamPos()
    },[progress])
    return(
        <>
         {/* <OrbitControls /> This is if we want the users to rotate the model//  */}
          {/* <OrbitControls
                onChange={() => {
                    if (!cameraRef.current) return;

                    console.log(
                    "Camera:",
                    cameraRef.current.position.x,
                    cameraRef.current.position.y,
                    cameraRef.current.position.z
                    );
                }} */}
                {/* /> */}
            <PerspectiveCamera ref={cameraRef} fov={isMobile ? 60 : 45} near={.1} far={10000} makeDefault  position={[16.1792,26.6640,-9.1159]} />
            <Environment preset="city" />
            <Keyboard scale={isMobile ? 10 : 15}  />
            {/* <axesHelper args={[500]}/> */}
        </>
    )
}

