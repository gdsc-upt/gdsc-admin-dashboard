import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Technology } from "../models/technology";
import logo from "../../../assets/images/Vector.png";
import { useEffectAsync } from "../../../hooks/async-hooks";
import { getTechnologies } from "../technologies-api";
import { TECHNOLOGIES_URLS } from "../urls";

export function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  useEffectAsync(async () => {
    console.log("Fetch Technologies");
    setTechnologies(await getTechnologies());
  });
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
                {t.id}
              </td>
              <td>{t.name}</td>
              <td>{t.description}</td>
              <td>{t.created}</td>
              <td>{t.updated}</td>
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
