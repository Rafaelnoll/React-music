import { SearchIconBox, TopNavContainer, TopNavInput } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { theme } from "../../styles/theme";
import { useRef } from "react";

export function TopNav() {
	const searchInput = useRef(null);

	function focusOnInput() {
		const input = searchInput.current;
		input.focus();
	}

	return (
		<TopNavContainer>
			<SearchIconBox onClick={focusOnInput}>
				<AiOutlineSearch color={theme.iconColor} />
			</SearchIconBox>
			<TopNavInput placeholder="Search" ref={searchInput} />
		</TopNavContainer>
	);
}
