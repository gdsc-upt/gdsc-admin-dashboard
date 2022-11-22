import React, { useEffect, useState } from "react";
import { Redirect } from "../models/redirect";
import { deleteRedirect, getRedirects, patchRedirect } from "../redirects-api";

export function RedirectsPage() {
  const [redirects, setRedirects] = useState<Redirect[]>([]);

  useEffect(() => {
    getRedirects().then(setRedirects);
  }, []);

  const fetchData = async () => {
    getRedirects().then(setRedirects);
  };

  const onDeleteClick = async (redirectId: string) => {
    await deleteRedirect(redirectId);
    await fetchData();
  };

  const onEditClick = async (redirectId: string, redirect: Redirect) => {
    await patchRedirect(redirectId, redirect);
    await fetchData();
  };
  return (
    <>
      <h2>Redirects</h2>
      <h2>Muie Dobre</h2>
    </>
  );
}
