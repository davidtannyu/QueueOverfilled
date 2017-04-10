export const getCurrentVote = ({votes, currentUser}, answerId) => {
    Object.values(votes).forEach((vote) => {
        if (currentUser && vote.voter_id === currentUser.id &&
            vote.answer_id === answerId) {
            return vote;
        }
    });
}