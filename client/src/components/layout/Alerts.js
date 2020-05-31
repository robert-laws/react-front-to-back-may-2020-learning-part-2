import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { Alert } from 'react-bootstrap';
import { InfoCircle } from 'react-bootstrap-icons';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
      <Alert key={alert.id} variant={`${alert.type}`} className="mt-3">
        <InfoCircle /> {alert.message}
      </Alert>
    ))
  )
}

export default Alerts
