import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "./firebase";

export function loginWithGoogle() {
  signInWithRedirect(auth, provider);
}
