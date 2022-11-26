import { Redirect } from "./models/redirect";
import {
  deleteRequest, get, patch, post,
} from "../../services/api";

export function getRedirects() {
  return get<Redirect[]>("redirects/admin");
}

export function addRedirect(redirect: Redirect) {
  return post<Redirect>("redirects", redirect);
}

export function deleteRedirect(redirectId: string) {
  return deleteRequest(`redirects/${redirectId}`, {});
}

export function patchRedirect(redirectId: string, redirect: Redirect) {
  return patch<Redirect>(`redirects/${redirectId}`, redirect);
}
