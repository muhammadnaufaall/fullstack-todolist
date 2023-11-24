import { signIn, useSession } from "next-auth/react";

const Home = () => {
  const { status } = useSession();
  return (
    <div>
      <h1>
        {status === "loading"
          ? "loading"
          : status === "authenticated"
          ? "authenticated"
          : "unauthenticated"}
      </h1>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default Home;
