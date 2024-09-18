// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <h1>Alert Notifications</h1>
    <Notification>
      <div className="icon-heading">
        <AiFillCheckCircle className="success-icon" />
        <h1 className="success">Success</h1>
      </div>
      <p>You can access all the files in the folder</p>
    </Notification>
    <Notification>
      <div className="icon-heading">
        <RiErrorWarningFill className="error-icon" />
        <h1 className="error">Error</h1>
      </div>
      <p>Sorry, you are not authorized to have access to delete the file</p>
    </Notification>
    <Notification>
      <div className="icon-heading">
        <MdWarning className="warning-icon" />
        <h1 className="warning">Warning</h1>
      </div>
      <p>Viewers of this file can see comments and suggestions</p>
    </Notification>
    <Notification>
      <div className="icon-heading">
        <MdInfo className="info-icon" />
        <h1 className="info">Info</h1>
      </div>
      <p>Anyone on the internet can view these files.</p>
    </Notification>
  </div>
)

export default AlertNotifications
