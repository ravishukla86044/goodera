const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let data = [
  {
    description:
      "Experience in Cloud Computing technologies, scripting languages (JSON, Python, RoR, etc), integrating 3rd party monitoring tools, encryption tools, and forensics. Implementation experience with enterprise security solutions such as WAF, IPS, Anti-DDOS, and SIEM.",
    title: "Principal Security Consultant",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
    type: "external",
    publication_date: "2021-08-04T00:04:04Z",
    id: 5690411,
    location: "Berlin, Germany",
    level: "senior",
    tags: [],
    company: {
      id: 12090,
      short_name: "amazon",
      name: "Amazon",
    },
  },

  {
    description:
      "Experience in Cloud Computing technologies, scripting languages (JSON, Python, RoR, etc), integrating 3rd party monitoring tools, encryption tools, and forensics. Implementation experience with enterprise security solutions such as WAF, IPS, Anti-DDOS, and SIEM.",
    title: "Software",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
    type: "external",
    publication_date: "2021-08-04T00:04:04Z",
    id: 5690411,
    location: "India",
    level: "senior",
    tags: [],
    company: {
      id: 12090,
      short_name: "amazon",
      name: "Amazon",
    },
  },
];

app.get("/jobs", function (req, res) {
  let title = req.query.title;
  let location = req.query.location;

  let a = [];
  if (title !== "" && location !== "") {
    for (var i = 0; i < data.length; i++) {
      if (
        data[i].title.toLowerCase().includes(title.toLowerCase()) &&
        data[i].location.toLowerCase().includes(location.toLowerCase())
      )
        a.push(data[i]);
    }
  } else if (title == "" && location !== "") {
    for (var i = 0; i < data.length; i++) {
      if (data[i].location.toLowerCase().includes(location.toLowerCase())) a.push(data[i]);
    }
  } else if (title !== "" && location == "") {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title.toLowerCase().includes(title.toLowerCase())) a.push(data[i]);
    }
  } else {
    a = data;
  }

  res.status(200).json({ data: a });
});

app.get("/jobs/:id", function (req, res) {
  let id = req.params.id;
  let a = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      a.push(data[i]);
      res.status(200).json({ data: a });
    }
  }
});

app.listen(3001, () => {
  console.log("lestining to 3001");
});
