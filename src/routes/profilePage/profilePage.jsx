import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Infomacije</h1>
            <button>Izmjeni nalog</button>
          </div>
          <div className="info">
            <span>
              Slika:
              <img
                src="/profile.jpg"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Dodaj novu objavu</button>
          </div>
          <List />
          <div className="title">
            <h1>Lista sačuvanih</h1>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;