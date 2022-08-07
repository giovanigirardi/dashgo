import { createServer, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
};

function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    routes() {
      this.namespace = "api";
      this.timing = 1000;

      // users
      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}

export { makeServer };
