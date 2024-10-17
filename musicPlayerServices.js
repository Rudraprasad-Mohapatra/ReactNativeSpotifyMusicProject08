import TrackPlayer, { RepeatMode} from "react-native-track-player";
import { Event } from "react-native-track-player";

import { playListData } from "./src/constants";

export async function setupPlayer() {
    let isSetUp = false;
    try {
        await TrackPlayer.getActiveTrackIndex();
        isSetUp = true;
    } catch (error) {
        await TrackPlayer.setupPlayer();
        isSetUp = true;
    }
    finally {
        return isSetUp;
    }
}

export async function addTrack() {
    await TrackPlayer.add(playListData);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })


}