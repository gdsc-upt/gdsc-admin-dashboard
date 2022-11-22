import { Redirect } from "./models/redirect";
import {
  deleteRequest, get, patch, post,
} from "../../services/api";
import { RedirectRequest } from "./models/redirect-request";

export function getRedirects() {
  return get<Redirect[]>("redirects");
}

export function addRedirect(redirect: RedirectRequest) {
  return post<Redirect>("redirects", redirect);
}

export function deleteRedirect(redirectId: string) {
  return deleteRequest(`redirects/${redirectId}`, {});
}

export function patchRedirect(redirectId: string, redirect: RedirectRequest) {
  return patch<Redirect>(`redirects/${redirectId}`, redirect);
}
