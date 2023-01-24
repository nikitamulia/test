import React, { FC } from "react";
import { Article } from "../../types/types";
import { useNavigate } from "react-router-dom";
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    Box,
    Button,
} from "@mui/material";
import Highlighter from "react-highlight-words";
import { useAppSelector } from "../../redux/store";
import moment from 'moment';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export const ArticleItem: FC<Article> = (article) => {
    const date = moment(article.publishedAt).format('MMM Do, YYYY');
    const filter = useAppSelector(state => state.filter);
    const navigate = useNavigate();

    return (
       <Card sx={{ boxShadow: 1 }}>
                <CardMedia
                    component="img"
                    height="217"
                    image={article.imageUrl}
                    alt={article.title}
                />
                <CardContent
                    sx={{
                        minHeight: "310px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        p: "25px",
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                opacity: 0.6,
                            }}
                        >
                           <CalendarTodayOutlinedIcon fontSize="small" />
                            <Typography sx={{ fontSize: 14 }}>
                            {date}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                mt: "25px",
                                fontSize: 24,
                                lineHeight: 1.21,
                            }}
                        >
                            <Highlighter
                                searchWords={filter.split(" ")}
                                textToHighlight={article.title}
                            />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ mt: "20px" }}>
                            <Highlighter
                                searchWords={filter.split(" ")}
                                textToHighlight={article.summary.slice(0, 100)}
                            />
                            {article.summary.length > 100 && "..."}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                mt: "20px",
                            }}
                        >
                            <Button onClick={() => navigate(`/article/${article.id}`)}
                             sx={{ fontWeight: 700, color: "#363636", pr: "10px" }}>
                                Read more
                                <ArrowForwardIcon fontSize="small" color="inherit"/>
                            </Button>
                            
                        </Box>
                    </Box>
                </CardContent>
        </Card>
    )
}

console.log('ArticleItem', ArticleItem)