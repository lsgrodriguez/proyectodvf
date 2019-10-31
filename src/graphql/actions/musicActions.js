import { musicModel } from '../../database/models';


const addMusicAction = async (musicData) => {
    try {
        return await musicModel.create(musicData)
    } catch (error) {
        console.log("TCL: addMusicAction", error)
    }
}

const showMusic = async () => {
    try {
        return await musicModel.find()
      } catch (error) {
        console.log("TCL: showAccounts -> error", error)
      }
}

export {
    addMusicAction,
    showMusic
}