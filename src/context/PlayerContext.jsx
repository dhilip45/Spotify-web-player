import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[1]);

    const [playStatus, setPlayStatus] = useState(false);

    const [time, setTime] = useState({
        currentTime: {
            second: "00",
            minute: "00"
        },

        totalTime: {
            second: "00",
            minute: "00"
        }
    });

    useEffect(() => {

        setTimeout(() => {

            audioRef.current.ontimeupdate = () => {

                seekBar.current.style.width = `${(audioRef.current.currentTime / audioRef.current.duration) * 100}%`;

                setTime({

                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },

                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }

                })

            }

        }, 1000)

    }, [audioRef])

    const play = () => {

        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playwithId= async (id) => {
        await setTrack(songsData[id])
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const before = async () => {
        if(track.id > 0){
            await setTrack(songsData[track.id - 1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
     const after = async () => {
        if(track.id < songsData.length - 1){
            await setTrack(songsData[track.id + 1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const seekBgClick = async (e) => {
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.clientWidth) * audioRef.current.duration;
        await audioRef.current.play();
        setPlayStatus(true);
    }

    

    const contextValue = {

        audioRef,
        seekBg,
        seekBar,

        track,
        setTrack,

        playStatus,
        setPlayStatus,

        time,
        setTime,

        play,
        pause,
        playwithId,

        before,
        after,
        seekBgClick

    };

    return (

        <PlayerContext.Provider value={contextValue}>

            {props.children}

        </PlayerContext.Provider>

    )

}

export default PlayerContextProvider;