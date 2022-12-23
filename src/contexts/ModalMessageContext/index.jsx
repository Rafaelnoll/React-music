import { useReducer } from "react";
import { createContext } from "react";
import P from "prop-types";

const initialState = {
	message: "",
};

function reducer(state, action) {
	switch (action.type) {
	case "send_message":
		return { ...state, message: action.message };
	case "clear":
		return initialState;
	default:
		throw new Error("Error in reducer");
	}
}

export const ModalMessageContext = createContext({});

export function ModalMessageProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	function modalDispatch(action) {
		dispatch(action);
	}

	return (
		<ModalMessageContext.Provider value={{ modalState: state, modalDispatch }}>
			{children}
		</ModalMessageContext.Provider>
	);
}

ModalMessageProvider.propTypes = {
	children: P.node.isRequired,
};
