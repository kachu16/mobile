import SafeScreen from "@/components/SafeScreen.js"
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
