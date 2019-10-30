import { commentModel } from '../../database/models';

const addCommentAction = async (commentData, authorID) => {
    try {
        const commentInfo = {
            ...commentData,
            authorID
        }
        return await commentModel.create(commentInfo)
    } catch (error) {
        console.log("TCL: addCommentAction -> error", error)
    }
}


export {
    addCommentAction 
}