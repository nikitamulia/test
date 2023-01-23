import { FC } from "react";
import { ArticleList } from "../../componenets/articleList/ArticleList";
import { SearchInput } from "../../componenets/searchInput/SearchInput";
import { Box } from "@mui/material";


export const HomePage: FC = () => {
    return(
        <Box px="75px" pt="50px" pb="63px">
            <SearchInput />
            <ArticleList />
        </Box>
    )
}