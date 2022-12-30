import { useState } from "react"

const Header = ({notify, setNotify}) =>{
    
    const [read, setRead] = useState('Mark all as read');
    const [activeLen, setActiveLen] = useState(3)
    const [isAllActive, setIsAllActive] = useState(false)
        const handleReadStatus = () => {
            if(!isAllActive){
                setIsAllActive(true)
                setRead('Mark all as unread')
                setActiveLen(0)
                setNotify(data => {
                    return data.map(datas => {
                        return {...datas, readStatus: false}
                    })
                })
            }else{
                setIsAllActive(false)
                setRead('Mark all as read')
                setActiveLen(notify.length)
                setNotify(data => {
                    return data.map(datas =>{
                        return {...datas, readStatus: true}
                    })
                })
            }
        }


    return (
        <div className="d-flex pt-2 mb-2">
                <div className="flex-grow-1">
                <h3>Notifications <span className="badge text-bg-primary" id="badge-no">{ activeLen }</span></h3>
                </div>
                <div>
                <h6 onClick={handleReadStatus} className="lead nav-link" id="read-toggle">{ read }</h6>
            </div>
            </div>
    )
}

export default Header