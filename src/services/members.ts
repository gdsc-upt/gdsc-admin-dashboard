import { fetchAndParse } from "../hooks/service-hooks";
import { MembersPayload } from "../models/membersPayload";
import { MembersResponse } from "../models/membersResponse";
import { baseUrl, headers } from "./config";

export function getApiMembersList(): Promise<MembersResponse[]> {
  // this is the promise response of the request
  const url = `${baseUrl}v1/members`; // here you should take the path that is described in swagger , leave the baseUrl
  return fetchAndParse<MembersResponse[]>(url, { method: "GET", headers }); // this is where you can edit the request
}

export function getApiSingleMember(id: string): Promise<MembersResponse[]> {
  const url = `${baseUrl}v1/members/${id}`;
  return fetchAndParse<MembersResponse[]>(url, { method: "GET", headers });
}

export function postApiMember(
  body: MembersPayload
): Promise<MembersResponse[]> {
  const url = `${baseUrl}v1/members`;
  return fetchAndParse<MembersResponse[]>(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });
}

// you can take those services as an example to create new ones
