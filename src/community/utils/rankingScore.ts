export const calculateRankingScore = (
    posts: number,
    likes: number,
    clones: number,
    comments: number
): number => {
    // rankingScore = posts*3 + likes*1 + clones*5 + comments*0.5
    return (posts * 3) + (likes * 1) + (clones * 5) + (comments * 0.5);
};
