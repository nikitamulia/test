import { FC } from "react";
import { Typography, Grid, Divider } from "@mui/material";
import { useAppSelector } from "../../redux/store";
import { Article } from "../../types/types";
import { ArticleItem } from "./ArticleItem";
import { getFilteredList } from "./articleUtils/utils";

export const ArticleList: FC = () => {
    const articles = useAppSelector((state) => state.list);
    const filter = useAppSelector((state) => state.filter);
    const list = getFilteredList(articles, filter.split(" "));

    return (
        <>
            <Typography sx={{ mt: 5, lineHeight: 1.25, fontWeight: 600 }}>
                {filter
                    ? `Results: ${list.length}`
                    : `Last ${list.length} articles`}
            </Typography>
            <Divider sx={{ mb: "45px", borderColor: "#EAEAEA" }} />
            <Grid container spacing={{ md: "45px" }} columns={{ md: 12 }}>
                {list.map((article: JSX.IntrinsicAttributes & Article) => (
                    <Grid item md={4} key={article.id}>
                        <ArticleItem {...article} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
