export const getCurrentVote = ({ votes, currentUser }, answerId) => {
    if (!currentUser) {
        return {};
    }
    let currentVote = {};
    Object.values(votes).forEach((vote) => {
        if (currentUser && vote.voter_id === currentUser.id &&
            vote.answer_id === answerId) {
            currentVote = vote;
            return false;
        }
    });
    return currentVote;
}