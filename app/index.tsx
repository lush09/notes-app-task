import { Redirect } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Index() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  // Redirect based on authentication status
  if (isAuthenticated) {
    return <Redirect href="/(app)/home" />;
  } else {
    return <Redirect href="/(auth)/login" />;
  }
}
