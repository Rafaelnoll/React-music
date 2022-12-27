import { useReducer } from "react";
import { createContext } from "react";
import P from "prop-types";

const initialState = {
	currentTrack: "",
	albumTracks:[],
};

function reducer(state, action) {
	switch (action.type) {
	case "play":
		console.log(state);
		return {...state, currentTrack: action.track};
	case "select_album":
		return {...state, albumTracks: action.albumTracks};
	case "clear_track":
		return {...state, currentTrack: initialState.currentTrack};
	default:
		throw new Error("Error in reducer");
	}
}

export const MusicPlayerContext = createContext({});

export function MusicPlayerProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	function playerDispatch(action) {
		dispatch(action);
	}

	return (
		<MusicPlayerContext.Provider value={{ state, playerDispatch }}>
			{children}
		</MusicPlayerContext.Provider>
	);
}

MusicPlayerProvider.propTypes = {
	children: P.node.isRequired,
};
