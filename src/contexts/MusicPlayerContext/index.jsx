import { useReducer } from "react";
import { createContext } from "react";
import P from "prop-types";

const initialState = {
	currentTrack: "",
};

function reducer(state, action) {
	switch (action.type) {
	case "play":
		return { currentTrack: action.track };
	default:
		console.log("deu ruim");
		break;
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