import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function AppLayout() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/(auth)/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          title: "My Notes",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="note/new"
        options={{
          title: "New Note",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="note/[id]"
        options={{
          title: "Edit Note",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
