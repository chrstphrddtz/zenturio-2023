"use client";

import { useEffect, useState } from "react";
import Button from "../dashboard/Button";

export default function Table() {
  // Pagination States
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Sorting States
  const [sortConfig, setSortConfig] = useState({ sortBy: "", direction: "" });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`/api/data?page=${page}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();

        setEntries((prevEntries) => [...prevEntries, ...data.paginatedData]);
        setHasMore(data.totalPages > page);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [page]);

  function handleSort(column) {
    const newSortConfig = { sortBy: column, direction: "asc" };

    if (sortConfig.sortBy === column) {
      // If the same column is clicked again, toggle the sorting direction
      newSortConfig.direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }

    setSortConfig(newSortConfig);
  }

  const sortedEntries = [...entries].sort((a, b) => {
    const valueA = a[sortConfig.sortBy];
    const valueB = b[sortConfig.sortBy];

    if (valueA < valueB) {
      return sortConfig.direction === "asc" ? -1 : 1;
    } else if (valueA > valueB) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  function handleLoadMore() {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <div>
      <table className="w-auto text-sm text-left">
        <thead className="uppercase bg-white border-b">
          <tr>
            <th className="px-2 py-2">
              <Button
                label="ID"
                onClick={() => handleSort("id")}
                active={sortConfig.sortBy === "id"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-6 py-3">
              <Button
                label="Datum"
                onClick={() => handleSort("datum")}
                active={sortConfig.sortBy === "datum"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-2 py-2">
              <Button
                label="Aussentemperatur"
                onClick={() => handleSort("aussentemperatur")}
                active={sortConfig.sortBy === "aussentemperatur"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-2 py-2">
              <Button
                label="Energie"
                onClick={() => handleSort("energie")}
                active={sortConfig.sortBy === "energie"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-2 py-2">
              <Button
                label="Volumen"
                onClick={() => handleSort("volumen")}
                active={sortConfig.sortBy === "volumen"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-2 py-2">
              <Button
                label="Leistung"
                onClick={() => handleSort("leistung")}
                active={sortConfig.sortBy === "leistung"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-2 py-2">
              <Button
                label="Durchfluss"
                onClick={() => handleSort("durchfluss")}
                active={sortConfig.sortBy === "durchfluss"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-2 py-2">
              <Button
                label="RL"
                onClick={() => handleSort("rl")}
                active={sortConfig.sortBy === "rl"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-2 py-2">
              <Button
                label="VL"
                onClick={() => handleSort("vl")}
                active={sortConfig.sortBy === "vl"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-2 py-2">
              <Button
                label="Spreizung"
                onClick={() => handleSort("spreizung")}
                active={sortConfig.sortBy === "spreizung"}
                direction={sortConfig.direction}
              />
            </th>
            <th className="px-2 py-2">
              <Button
                label="Zähler"
                onClick={() => handleSort("zähler")}
                active={sortConfig.sortBy === "zähler"}
                direction={sortConfig.direction}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedEntries.map((element) => {
            // const date = new Date(element.datum);
            // const day = date.getDate();
            // const month = date.getMonth() + 1;
            // const year = date.getFullYear();
            // const hours = date.getHours();
            // const minutes = date.getMinutes();

            // const newDate = `${day}.${month}.${year}`;
            // const newTime = `${hours}:${minutes}`;

            return (
              <tr className="bg-white border-b" key={element.id}>
                <td className="text-lg px-2 py-2">{element.id}</td>
                <td className="text-lg px-2 py-2">{element.datum}</td>
                <td className="text-lg px-2 py-2">
                  {element.aussentemperatur} °C
                </td>
                <td className="text-lg px-2 py-2">{element.energie} kWh</td>
                <td className="text-lg px-2 py-2">{element.volumen} m3</td>
                <td className="text-lg px-2 py-2">{element.leistung} kW</td>
                <td className="text-lg px-2 py-2">{element.durchfluss} lph</td>
                <td className="text-lg px-2 py-2">{element.rl} °C</td>
                <td className="text-lg px-2 py-2">{element.vl} °C</td>
                <td className="text-lg px-2 py-2">{element.spreizung} °C</td>
                <td className="text-lg px-2 py-2">{element.zähler}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
      {!loading && hasMore && (
        <button
          className="bg-inherit p-1 mx-auto my-3 border-2 border-solid border-secondary rounded text-secondary text-2xl font-bold :hover decoration-solid decoration-2"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
      {!loading && !hasMore && <p>No more entries to load.</p>}
    </div>
  );
}
