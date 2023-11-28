const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = REACT_APP_LINK;
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('Portfolio');
    const movies = database.collection('data');
    const doc = {
      id: "youtube",
      img: "",
      name: "Youtube Clone",
      stack: ["< Reactjs />", "< tailwind CSS />", "< RESTAPI />"],
      live: "https://react-youtube-prj.netlify.app",
      source: "https://github.com/Pavithrank02/react-youtube",
      description:
        "Begin by setting up a new React application using a tool like Create React App. This will provide you with the basic project structure and configuration. Use a routing library like React Router to handle navigation within your YouTube clone. Define routes for different pages, such as the home page, video page, user profile, and search results",
    }
    // Insert the defined document into the "haiku" collection
    const result = await movies.insertOne(doc);
    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    // Ensures that the client will close when you finish/error

  }
}
run().catch(console.dir);