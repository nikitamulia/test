import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useAppSelector } from "../../redux/store";


export const InfoPage: FC = () => {
    const { articleId } = useParams();
    const articles = useAppSelector((state) => state.list);
    const article = articles.find(
        (article) => article.id === Number(articleId)
    );
    const navigate = useNavigate();

    return(
        <>
            <img
                className="image"
                src={article?.imageUrl}
                alt="article poster"
                height="245px"
            />
            <Box
                sx={{
                    mx: "75px",
                    px: "75px",
                    pt: "35px",
                    pb: "50px",
                    transform: "translateY(-95px)",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #EAEAEA",
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
                    borderRadius: "5px",
                }}
            >
                <Typography
                    sx={{
                        mt: "35px",
                        fontSize: 24,
                        ineHeight: 1.21,
                        textAlign: "center",
                    }}
                >
                    {article?.title}
                </Typography>
                <Typography paragraph sx={{ mt: "50px", fontSize: 18 }}>
                   {article?.summary}
                </Typography>
            </Box>
            <Button
                onClick={() => navigate("/")}
                sx={{
                    mt: "-60px",
                    mb: "45px",
                    ml: "150px",
                    textTransform: "none",
                    fontWeight: 700,
                    color: "inherit",
                }}
            >
                Back to homepage
            </Button>
        </>
    )
}