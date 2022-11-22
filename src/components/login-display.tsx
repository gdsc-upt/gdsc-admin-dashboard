import * as React from "react";
import { useAuth } from "../features/auth";

export default function LoginDisplay() {
  const auth = useAuth();

  return (
    <div>
      {auth.user ? (
        <div>
          <p>Logged in</p>
          <button type="button" onClick={() => auth.signOut()}>
            Log out
          </button>
        </div>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
