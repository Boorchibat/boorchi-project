import { SearchBarForOtherPage } from "./SearchBarForOtherPage"


type searchBarProps = {
    isMobile: boolean
}

export const SearchBar = ({isMobile}: searchBarProps) => {
    return <SearchBarForOtherPage isMobile={isMobile} />
}
