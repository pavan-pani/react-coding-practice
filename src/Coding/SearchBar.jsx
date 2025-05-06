import axios from "axios";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      setNewData(res.data);
    });
  }, []);

  function debounce(callThis, dealy) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callThis(...args), dealy);
    };
  }

  const handleSerch = (input) => {
    const filterData = data.filter((item) => item.name.includes(input));
    setNewData(filterData);
  };

  const callDebounce = debounce(handleSerch, 5000);

  return (
    <>
      <input type="text" onChange={(e) => callDebounce(e.target.value)} />
      {newData.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.name}</span>
          </div>
        );
      })}
    </>
  );
};
export default SearchBar;
