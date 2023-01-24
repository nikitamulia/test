import { FC } from "react";
import { ArticleList } from "../../components/articleList/ArticleList";
import { SearchInput } from "../../components/searchInput/SearchInput";
import { Box } from "@mui/material";


export const HomePage: FC = () => {
    return(
        <Box px="75px" pt="50px" pb="63px">
            <SearchInput />
            <ArticleList />
        </Box>
    )
}