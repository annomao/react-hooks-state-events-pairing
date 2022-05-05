import video from "../data/video.js";
import Button from "./Button.js";
import Comments from "./Comment.js";
import Title from "./Title.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video embedUrl={video.embedUrl} />
      <Title title={video.title} views={video.views} createdAt={video.createdAt} />
      <Button votes={video.upvotes} emoji="👍"/>
      <Button votes={video.downvotes} emoji="👎"/>
      <br/><br/>
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
