import { musicModel } from '../../database/models';

const addMusicAction = async (musicData) => {
    try {
        return await musicModel.create(musicData)
    } catch (error) {
        console.log("TCL: addMusicAction", error)
    }
}

export {
    addMusicAction
}