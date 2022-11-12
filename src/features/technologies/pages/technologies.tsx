import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Technology } from "../models/technology";
import logo from "../../../assets/images/Vector.png";
import { deleteTechnology, getTechnologies } from "../technologies-api";
import { TECHNOLOGIES_URLS } from "../urls";

export function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    console.log("Fetch Technologies");
    getTechnologies().then(setTechnologies);
  }, []);

  const onDeleteSubmit = async (technologyId: string) => {
    await deleteTechnology(technologyId);
    getTechnologies().then(setTechnologies);
  };

  return (
    <>
      <p>Technologies</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line react/no-array-index-key */}
          {technologies.map(t => (
            <tr key={t.id}>
              <td>
                <img src={logo} alt="user img" />
              </td>
              <td>{t.name}</td>
              <td>{t.description}</td>
              <td>{new Date(t.created).toLocaleString()}</td>
              <td>{new Date(t.updated).toLocaleString()}</td>
              <td>
                <button type="button" onClick={() => onDeleteSubmit(t.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={TECHNOLOGIES_URLS.addTechnology}>
        <button type="button">Add technology</button>
      </Link>
    </>
  );
}
