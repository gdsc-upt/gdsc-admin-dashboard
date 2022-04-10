import React from "react";
import {Technology} from "../models/technology";
import logo from '../assets/images/Vector.png';

export function Technologies() {
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
                {technologies.map((t, key) => (<tr key={key}>

                    <td><img src={logo}
                             alt="user img"/>{t.id}</td>
                    <td>{t.name}</td>
                    <td>{t.description}</td>
                    <td>{t.created}</td>
                    <td>{t.updated}</td>
                </tr>))}
                </tbody>
            </table>
        </>
    )
}

const technologies: Technology[] = [
    {
        id: "1",
        name: "react",
        description: "description",
        created: "today",
        updated: Date.now().toString()
    },
    {
        id: "2",
        name: "css",
        description: "no description",
        created: "yesterday",
        updated: Date.now().toString()
    },
    {
        id: "3",
        name: "json",
        description: "asndbfgr",
        created: "today",
        updated: Date.now().toString()
    }]
