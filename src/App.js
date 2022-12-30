import { useState } from "react";
import icon from "./images/avatar-mark-webber.webp"
import icon1 from "./images/avatar-angela-gray.webp"
import icon2 from "./images/avatar-jacob-thompson.webp"
import icon3 from "./images/avatar-rizky-hasanuddin.webp"
import icon4 from "./images/avatar-kimberly-smith.webp"
import icon5 from "./images/avatar-nathan-peterson.webp"
import icon6 from "./images/avatar-anna-kim.webp"
import picturePost from "./images/image-chess.webp"
import Header from "./component/header";
import NotifBody from "./component/body";

function App() {
  const [notify, setNotify] = useState([
    {
      id: 1,
      username: 'Mark Werber ',
      avatar: icon,
      activity: 'reacted to your recent post ',
      title: 'My first tournament today!',
      message: '',
      picturePost: '',
      time: '1m ago',
      readStatus: true,
      
    },
    { 
      id: 2,
      username: 'Angela Gray ',
      avatar: icon1,
      activity: 'followed you',
      title: '',
      message: '',
      picturePost: '',
      time: '5m ago',
      readStatus: true,
    },
    {
      id: 3,
      username: 'Jacob Thompson ',
      avatar: icon2,
      activity: 'has joined your group ',
      title: 'Chess Club',
      message: '',
      picturePost: '',
      time: '5d ago',
      readStatus: true,
      },
      {
        id: 4,
        username: 'Rikzy Hasannuddin ',
        avatar: icon3,
        activity: 'sent you a private messsage ',
        title: '',
        message: 'Hello, thanks for setting up the Chess Club I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        picturePost: '',
        time: '5d ago',
        readStatus: false,
        },
        {
          id: 5,
          username: 'Kimberly Smith ',
          avatar: icon4,
          activity: 'commented on your picture ',
          title: 'Chess Club',
          message: '',
          picturePost: picturePost,
          time: '1 week ago',
          readStatus: false,
          },
          {
            id: 6,
            username: 'Nathan Peterson ',
            avatar: icon5,
            activity: 'reacted to your recent post ',
            title: '5 end-game strategies to increase your win rate',
            message: '',
            picturePost: '',
            time: '2 weeks ago',
            readStatus: false,
            },
            {
              id: 7,
              username: ' Anna Kim ',
              avatar: icon6,
              activity: 'left the group ',
              title: 'Chess Club',
              message: '',
              picturePost: '',
              time: '2 weeks ago',
              readStatus: false,
              },
  ])

  return (
    <div className="App">
       <div className="container mb-2 p-4" id="wrapper">
            <Header notify={notify} setNotify={setNotify}/>
            <NotifBody notify={notify} />
        </div>
    </div>
  );
}

export default App;
