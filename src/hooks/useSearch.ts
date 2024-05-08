import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const clearSearch = () => {
    setSearchTerm("");
    navigate("/search");
  };

  return { searchTerm, setSearchTerm, clearSearch };
};

export default useSearch;
