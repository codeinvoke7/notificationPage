import { useState } from "react";

const NotifBody = ({notify}) => {
    
    const [display, setDisplay] = useState(false)
    const handleDisplayMessage = (m) =>{
        if(!display && m){
            setDisplay(true)
        }else if(display && m){
            setDisplay(false)
        }
    }
    
    return (
        <div className="notfbody">
        { notify.map((notf) => 
            <>
           <div onClick={() => handleDisplayMessage(notf.message)} className={notf.readStatus ? 'active-notf d-flex rounded p-2 mb-2' : 'd-flex rounded p-2 mb-2'} key={notf.id}>
                <div className="img pe-2"><img src={notf.avatar} alt="" width="50px" /></div>
            <div>
                    <span><b className="usernames">{notf.username }</b></span>
                    <span className="notf-text">{notf.activity}</span>
                    {notf.picturePost && <img className="notf-img" src={ notf.picturePost} alt="" width="30px" />}
                    <span className={notf.readStatus ? 'notf-badge notf-link' : 'notf-link'}>{notf.title}</span>
                    <div className="notf-time">{notf.time}</div>
                </div>
                </div>
                {notf.message && <div className={display ? 'message displayMessage mb-2' : 'dontDisplayMessage message mb-2'}><p>{ notf.message }</p></div>}
                </>
        )}
        </div>
    );
}
 

 
export default NotifBody;