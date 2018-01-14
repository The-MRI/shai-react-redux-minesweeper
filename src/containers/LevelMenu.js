import {connect} from 'react-redux';
import LevelMenu from "../components/LevelMenu";
import * as BoardHelpers from "../reducers/boardHelpers";
import {RESET_BOARD} from "../action/actionTypes";
import Levels from "../reducers/Levels";

const LEVELS = Levels();

const mapStateToProps = ({ board }) => {
    const gameLevels =Object.keys(LEVELS).map((id) => ({id, name:LEVELS[id].name}));


    return { gameLevels, activeLevel: BoardHelpers.currentGameLevelId(board) };
};
const mapDispatchToProps = (dispatch) => ({
    changeLevel: (level) => {
        dispatch({
            type: RESET_BOARD,
            gLevel: level
        })
    }
});

const Container = connect(mapStateToProps, mapDispatchToProps)(LevelMenu);

export {Container as default, mapStateToProps}