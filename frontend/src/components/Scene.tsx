//lights, camera, controll
import { useRef,useEffect } from "react"
import {useFrame} from '@react-three/fiber'
import {Environment, PerspectiveCamera} from '@react-three/drei'
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
    //position={[-9.9415,18.5364,8.5707]}
    //position={[-15.1613,-8.7929,1.0565]}
    //position={[3.5022,-21.2549,-0.8169]}
    //position={[6.1298,-24.1253,-8.9922]}
    useFrame(() => {
    cameraRef.current?.lookAt(0, 0, 0);
    });

    useEffect(()=>{
        const updateCamPos=()=>{
            const positions = [
                [-9.9415,18.5364,8.5707],
                [-15.1613,-8.7929,1.0565],
                [3.5022,-21.2549,-0.8169],
                [6.1298,-24.1253,-8.9922]
            ]
            const segmentProgress=1/2
            const segmentIndex = Math.floor(progress/segmentProgress);
            // console.log(segmentIndex,cameraRef.current)
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
            <PerspectiveCamera ref={cameraRef} fov={45} near={.1} far={10000} makeDefault  position={[-9.9415,18.5364,8.5707]} />
            <Environment preset="city" />
            <Keyboard />
            {/* <axesHelper args={[500]}/> */}
        </>
    )
}

