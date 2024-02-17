import { skincare, fitness, women, ayurveda, homeo, blog } from "../Assests";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, InputLabel } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { server } from "../server";
const MyTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
    background-color: black; 
    padding: 0 8px; /* Adjust padding for better visibility */
    border-radius: ${(props) =>
    props.hasSearchText
      ? "50px 50px 0 0"
      : "50px"}; /* Apply different border-radius if there is search text */
  }
  &label {
    background-color: #black;
  }
  & .MuiOutlinedInput-root {
    border-radius: ${(props) =>
    props.hasSearchText
      ? "50px 50px 0 0"
      : "50px"}; /* Apply different border-radius if there is search text */
    border: 1px solid #000;
    &.Mui-focused {
      fieldset {
        border-color: #000;
      }
    }
  }
`;

function Blogs() {
  const [articles, setArticles] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${server}/blog/blog`
        );
        console.log(response.data)
        setArticles(response.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const getLatestBlogs = () => {
    const currentDate = new Date();
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(currentDate.getDate() - 1);

    return articles.filter((article) => {
      const articleDate = new Date(article.date);
      return articleDate >= twoWeeksAgo && articleDate <= currentDate;
    });
  };

  const groupByTag = (articles) => {
    const groupedArticles = {};
    articles.forEach((article) => {
      if (!groupedArticles[article.tag]) {
        groupedArticles[article.tag] = [];
      }
      groupedArticles[article.tag].push(article);
    });
    return groupedArticles;
  };

  const latestBlogs = groupByTag(getLatestBlogs());
  const olderBlogs = groupByTag(
    articles.filter((article) => !getLatestBlogs().includes(article))
  );

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
  };

  const clearTagFilter = () => {
    setSelectedTag(null);
  };

  const filteredLatestBlogs = selectedTag
    ? { [selectedTag]: latestBlogs[selectedTag] }
    : latestBlogs;

  const filteredOlderBlogs = selectedTag
    ? { [selectedTag]: olderBlogs[selectedTag] }
    : olderBlogs;

  const getFilteredNewBlogsArray = () => {
    const latestBlogsArray = Object.entries(filteredLatestBlogs)
      .map(([tag, articles]) => articles || [])
      .flat();

    const filteredBySearchTerm = latestBlogsArray.filter((article) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        !searchTerm ||
        article.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        article.tag.toLowerCase().includes(lowerCaseSearchTerm) ||
        article.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        article.author.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    return selectedTag
      ? filteredBySearchTerm.filter((article) => article.tag === selectedTag)
      : filteredBySearchTerm;
  };

  const getFilteredOlderBlogsArray = () => {
    const olderBlogsArray = Object.entries(filteredOlderBlogs)
      .map(([tag, articles]) => articles || [])
      .flat();

    if (!olderBlogsArray) return []; // Handle the null case

    const filteredBySearchTerm = olderBlogsArray.filter((article) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        !searchTerm ||
        article.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        article.tag.toLowerCase().includes(lowerCaseSearchTerm) ||
        article.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        article.author.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    return selectedTag
      ? filteredBySearchTerm.filter((article) => article.tag === selectedTag)
      : filteredBySearchTerm;
  };

  return (
    <div className="mt-8 min-h-screen overflow-hidden ">
      <div>
        <Header activeHeading={6} />
        <div style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }} className={`d-flex justify-content-center pt-20 ${styles.heading}`}>

          <h1 className="texthead leading-relaxed font-[600]">
            Sort by {" "}
            <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">
              Tags
            </span>
          </h1>
        </div>
      </div>
      <div className="flex justify-between p-10">
        <div
          className="text-center"
          onClick={() => handleTagFilter("skincare")}
        >
          <img
            src="https://cdn-icons-png.freepik.com/256/11009/11009196.png?ga=GA1.1.323232629.1708013773&semt=ais"
            alt="Skin Care"
            className="rounded-full w-20 h-20 cursor-pointer"
          />
          <p>Skin Care</p>
        </div>
        <div className="text-center" onClick={() => handleTagFilter("fitness")}>
          <img
            src="https://cdn-icons-png.freepik.com/256/5783/5783140.png?ga=GA1.1.18166763.1708164657&semt=ais"
            alt="Fitness"
            className="rounded-full w-20 h-20 cursor-pointer"
          />
          <p>Fitness</p>
        </div>
        <div className="text-center" onClick={() => handleTagFilter("women")}>
          <img
            src="https://cdn-icons-png.freepik.com/256/4277/4277490.png?ga=GA1.1.323232629.1708013773&semt=ais"
            alt="women"
            className="rounded-full w-20 h-20 cursor-pointer"
          />
          <p>Women</p>
        </div>
        <div
          className="text-center"
          onClick={() => handleTagFilter("ayurveda")}
        >
          <img
            src="https://cdn-icons-png.freepik.com/256/11517/11517266.png?ga=GA1.1.18166763.1708164657&semt=ais"
            alt="Ayurveda"
            className="rounded-full w-20 h-20 cursor-pointer"
          />
          <p>Ayurveda</p>
        </div>
        <div className="text-center" onClick={() => handleTagFilter("homeo")}>
          <img
            src="https://cdn-icons-png.freepik.com/256/7886/7886828.png?ga=GA1.1.18166763.1708164657&semt=ais"
            alt="Homeo"
            className="rounded-full w-20 h-20 cursor-pointer"
          />
          <p>Homeo</p>
        </div>
      </div>
      <div className="ml-36 d-flex justify-content-center">
        <div className="flex justify-start items-center gap-3 mt-8 rounded-lg">
          <MyTextField
            label="&nbsp;&nbsp;Search for Blogs"
            size="small"
            className="w-[80vw] md:w-[50vw]"
            style={{
              margin: "10px",
              background: "#49B9C8",
              boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
              justifyContent: "center",
            }}
            autoComplete="false" // Disable auto-fill
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={clearTagFilter}
            className="ml-4 h-10"
            style={{ color: "#fff", backgroundColor: "#49B9C8", marginLeft: "10px" }}
          >
            Clear Filter
          </Button>
          <div className="relative inline-block text-left">
            <InputLabel htmlFor="tagFilter" className="sr-only">
              Select Tag
            </InputLabel>
            <select
              id="tagFilter"
              name="tagFilter"
              onChange={(e) => handleTagFilter(e.target.value)}
              value={selectedTag || ""}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="" disabled>
                Filter by Tag
              </option>
              {Object.keys(latestBlogs).map((tag) => (
                <option key={tag} value={tag}>
                  {tag.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className=" md:flex flex-row justify-between mx-4 mb-4">
          <div className="mt-8 animate__animated animate__backInLeft animate__delay-1s md:w-4/5 md:pl-[120px]">
            <div className="text-black border-b-4 pb-8 p-2 pt-8 border-white border-opacity-50 text-xl md:text-[45px] font-semibold">
              <div style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }} className={`d-flex justify-content-center pt-20 ${styles.heading}`}>

                <h1 className="texthead leading-relaxed font-[600]">
                  Latest{" "}
                  <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">
                    Blogs
                  </span>
                </h1>
              </div>
            </div>
            <div className="animate__animated animate__fadeInLeft animate__delay-2s">
              {getFilteredNewBlogsArray().length > 0 ? (
                getFilteredNewBlogsArray().map((article) => (
                  <div
                    className="mt-8 md:flex bg-white p-6 rounded-lg md:mx-0 mx-6 flex-row gap-0 md:gap-6 cursor-pointer justify-between"
                    key={article._id}
                    onClick={() => navigate(`/blogs/${article._id}`)}
                  >
                    <div className=" md:px-0 px-2 md:py-0 py-4 rounded-xl w-[40vw] flex flex-col justify-between">
                      <div className="mt-4 text-black text-sm md:text-[28px] font-medium md:leading-9">
                        {article.title}
                      </div>
                      <div className="mt-4 text-black text-opacity-50 text-sm md:text-lg font-normal md:leading-[27px]">
                        {article.description}
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="flex">
                          <div className="bg-gradient-to-r px-3 py-2 from-sky-500 to-sky-600 rounded-tl-md rounded-bl-md items-center text-center text-black text-[13px] font-bold uppercase leading-none tracking-wide">
                            {article.tag}
                          </div>
                          <div className="px-3 pt-2 pb-2.5 bg-indigo-100 rounded-tr-md rounded-br-md justify-center items-center text-center text-blue-950 text-[13px] font-medium uppercase leading-none">
                            {article.date && new Date(article.date).toLocaleDateString("en-GB")}
                          </div>
                        </div>
                        <div className="text-center text-black text-[13px] font-bold leading-none">
                          {article.time} read
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        className="w-[20vw] h-[25vh]"
                        src={article.image ? article.image : blog}
                        alt="blogimage"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>No blogs found for the selected tag.</p>
              )}
            </div>
            <div>
              <div style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }} className={`d-flex justify-content-center pt-20 ${styles.heading}`}>

                <h1 className="texthead leading-relaxed font-[600]">
                  Older{" "}
                  <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">
                    Blogs
                  </span>
                </h1>
              </div>
              {getFilteredOlderBlogsArray().length > 0 ? (
                getFilteredOlderBlogsArray().map((article) => (
                  <div
                    className="mt-8 md:flex md:mx-0 mx-6 flex-row gap-0 md:gap-6 cursor-pointer"
                    key={article.id}
                    onClick={() => navigate(`/blogs/${article._id}`)}
                  >
                    <div className=" md:px-0 px-2 md:py-0 py-4 rounded-xl flex justify-between">
                    <div className="mt-8 text-black text-sm md:text-[28px] font-medium md:leading-9">
                        {article.title}
                      </div>
                      <div className="text-black text-opacity-50 text-sm md:text-lg font-normal md:leading-[27px]">
                        {article.description}
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="flex">
                          <div className="bg-gradient-to-r px-3 py-2 from-sky-500 to-sky-600 rounded-tl-md rounded-bl-md items-center text-center text-black text-[13px] font-bold uppercase leading-none tracking-wide">
                            {article.tag}
                          </div>
                          <div className="px-3 pt-2 pb-2.5 bg-indigo-100 rounded-tr-md rounded-br-md justify-center items-center text-center text-blue-950 text-[13px] font-medium uppercase leading-none">
                            {article.date && new Date(article.date).toLocaleDateString("en-GB")}
                          </div>
                        </div>
                        <div className="text-center text-black text-[13px] font-bold leading-none">
                          {article.time} read
                        </div>
                      </div>

                      
                    </div>
                    <div>
                      <img
                        className="w-[550px] h-[220px]"
                        src={article.image ? article.image : blog}
                        alt="blogimage"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>No Older blogs found for the selected tag.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
