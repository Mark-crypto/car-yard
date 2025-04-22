import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Footers } from "../components/Footers";
import { Search } from "../components/Search";
import { SideBar } from "../components/SideBar";
import { Posts } from "./Posts";
import { Pagination } from "../components/Pagination";

export const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const dataResponse = await fetch("/api/api/v1/cars");
        const response = await dataResponse.json();
        setData(response);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  currentPosts.sort((a, b) => a.model.localeCompare(b.model));

  const handleClick = (id) => {
    window.location.href = `/product/${id}`;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error encountered</p>;
  }
  return (
    <>
      <NavBar />

      <Search />

      <div className="products">
        <div className="products-filter">
          <SideBar setData={setData} data={data} />
        </div>
        <div className="products-card">
          <Posts currentPosts={currentPosts} handleClick={handleClick} />
        </div>
      </div>
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Footers />
    </>
  );
};
