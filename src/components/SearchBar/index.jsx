import { useContext, useRef, useState } from "react";
import { SearchBarIconBox, SearchBarContainer, SearchBarInput } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { AlbumsContext } from "../../contexts/AlbumsContext";
import SearchBarModal from "../SearchBarModal";

export function SearchBar() {
	const { albums } = useContext(AlbumsContext);
	const [foundedAlbums, setFoundedAlbums] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const searchInput = useRef(null);

	function focusOnInput() {
		const input = searchInput.current;
		input.focus();
	}

	function handleChangeSearchValue(e) {
		const value = e.target.value;
		setSearchValue(value);

		let foundedAlbums = albums.filter((album) => {
			if(album.name.toLowerCase().includes(value)) return album;
		});

		setFoundedAlbums(foundedAlbums);
	}

	return (
		<>
			<SearchBarContainer>
				<SearchBarIconBox onClick={focusOnInput}>
					<AiOutlineSearch color="#000" />
				</SearchBarIconBox>
				<SearchBarInput
					value={searchValue}
					onChange={(e) => handleChangeSearchValue(e)}
					placeholder="Search"
					ref={searchInput}
				/>
			</SearchBarContainer>
			{searchValue !== "" && <SearchBarModal albums={foundedAlbums} />}
		</>
	);
}
