

export const initialState = {
    scores: {
        player: 0,
        house: 0
    },
    game: {
        round: 0,
        playerChoice: "",
        houseChoice: "",
        winnerRound: ""
    },
    ui: {
        showResults: false,
        showRules: false
    }
}