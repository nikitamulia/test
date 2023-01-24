import { Article } from "../../../types/types";

export const getFilteredList = (list: Article[], keywords: string[]) => {
    if (keywords.length === 0) return list;
    const resultTitle = list.filter((article) =>
        keywords.some((word) =>
            article.title.toLowerCase().includes(word.toLowerCase())
        )
    );
    const resultSummary = list.filter((article) =>
        keywords.some((word) =>
            article.summary.toLowerCase().includes(word.toLowerCase())
        )
    );
    const result = resultTitle.concat(resultSummary);
    return result.filter((article, index) => result.indexOf(article) === index);
};

export const getFormatedDate = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.toLocaleString("en-US", { month: "long" });
    const dayNumber = d.getDate();
    const day =
        dayNumber.toString() +
        ["th", "st", "nd", "rd"][
            (dayNumber > 3 && dayNumber < 21) || dayNumber % 10 > 3
                ? 0
                : dayNumber % 10
        ];
    return `${month} ${day}, ${year}`;
};