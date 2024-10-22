import { createServer, Model } from "miragejs";
export const server = () =>
  createServer({
    models: {
      skill: Model,
    },
    routes() {
      this.urlPrefix = "http://localhost:3000";
      this.namespace = "api";
      // this.get(
      //   "/educations",
      //   (schema, request) => {
      //     return [
      //       {
      //         date: 2001,
      //         title: "Title 0",
      //         text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
      //       },
      //       {
      //         date: 2000,
      //         title: "Title 1",
      //         text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n",
      //       },
      //       {
      //         date: 2010,
      //         title: "Title 2",
      //         text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n",
      //       },
      //     ];
      //   },
      //   { timing: 3000 }
      // );

      let skills = JSON.parse(localStorage.getItem("skills")) || [];

      this.get("/skills", (schema, request) => {
        return skills;
      });

      this.post("/skills", (schema, request) => {
        const newSkill = JSON.parse(request.requestBody);
        skills.push(newSkill);
        return skills;
      });
    },
  });
