import LoginForm from "./login-form";

interface AuthLoginPageProps {}
export default function AuthLoginPage(props: AuthLoginPageProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm />
    </div>
  );
}
