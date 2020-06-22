const users = [
  {
    id: "79d4fa38-403b-4c36-b86a-8356dbfc5f9a",
    handle: "bobthebuilder",
    email: "bob@gmail.com",
    password: "5F4DCC3B5AA765D61D8327DEB882CF99",
    gender: "male",
    createdAt: 1592452421714,
    techInterestedIn: [
      //array of objects, map over to display on other users!!
      {
        name: "JavaScript",
        popularity: 60,
        id: 1,
      },
      {
        name: ".NET Core",
        popularity: 50,
        id: 2,
      },
      {
        name: "Amazon DynamoDB",
        popularity: 50,
        id: 3,
      },
    ],
  },
  {
    id: "bbfc927c-f3d4-4cdd-b872-9cb233a194aa",
    handle: "blackpink",
    email: "karen@gmail.com",
    password: "EEEAC4F9D754AAF4909392BCE3FF2FF3",
    gender: "female",
    createdAt: 1592452421714,
    techInterestedIn: "Swift, zsh, Python",
  },
  {
    id: "2f816b3d-ba4b-4381-8a72-c9f55d3b9548",
    handle: "juanito",
    email: "juan@gmail.com",
    password: "A6BBC6A4D9981A9A3AF73B9E9AF353AD",
    gender: "na",
    createdAt: 1592452421714,
    techInterestedIn: "Ruby, GO, Objective-C",
  },
  {
    id: "5079fcb3-e0b9-4049-998e-46115d3105eb",
    handle: "pEscobar",
    email: "pablo@gmail.com",
    password: "BE72E1341DFEFFCDCB4889ED13E577A3",
    gender: "male",
    createdAt: 1592452421714,
    techInterestedIn: "C#, Java, Kotlin",
  },
];

export default users;
