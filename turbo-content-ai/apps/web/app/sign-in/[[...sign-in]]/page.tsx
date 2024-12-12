import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <SignIn
        appearance={{
          baseTheme: neobrutalism,
          variables: {
            colorBackground: "#A0E00D",
            colorText: "#070806",
          },
          elements: {
            formButtonPrimary: "bg-darkgreen",
            formFiled: "bg-red-500",
          },
        }}
      />
      ;
    </div>
  );
}
