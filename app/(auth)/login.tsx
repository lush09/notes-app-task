import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Colors } from "../../constants/Colors";
import { RootState } from "../../store";
import {
  clearError,
  loginFailure,
  loginStart,
  loginSuccess,
  performLogin,
} from "../../store/slices/authSlice";
import { validateLoginCredentials } from "../../utils/validation";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(app)/home");
    }
  }, [isAuthenticated, router]);

  // Clear error when component mounts
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleLogin = async () => {
    // Clear previous errors
    setUsernameError("");
    setPasswordError("");

    // Validate inputs
    const validationError = validateLoginCredentials(username, password);
    if (validationError) {
      if (!username.trim()) setUsernameError(validationError);
      if (!password.trim()) setPasswordError(validationError);
      return;
    }

    // Start login process
    dispatch(loginStart());

    try {
      // Perform login
      const user = await performLogin({ username, password });
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error as string));
    }
  };

  const handleUsernameChange = (text: string) => {
    setUsername(text);
    if (usernameError) setUsernameError("");
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (passwordError) setPasswordError("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>
          </View>

          <View style={styles.form}>
            <Input
              label="Username"
              placeholder="Enter your username"
              value={username}
              onChangeText={handleUsernameChange}
              error={usernameError}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={handlePasswordChange}
              error={passwordError}
              secureTextEntry
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

            <Button
              title="Sign In"
              onPress={handleLogin}
              loading={isLoading}
              disabled={isLoading}
              style={styles.loginButton}
            />

            <View style={styles.demoInfo}>
              <Text style={styles.demoText}>
                Demo Credentials:{"\n"}
                Username: test{"\n"}
                Password: password123
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  loginButton: {
    marginTop: 24,
  },
  errorText: {
    color: "#ff4444",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
  demoInfo: {
    marginTop: 32,
    padding: 16,
    backgroundColor: "#e3f2fd",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: Colors.light.primary,
  },
  demoText: {
    fontSize: 14,
    color: "#1976d2",
    textAlign: "center",
    lineHeight: 20,
  },
});
