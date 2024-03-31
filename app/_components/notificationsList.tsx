"use client"
import { useEffect, useRef } from "react"
import { useNotificationStore } from "../_store/notificationsContext"
import { NotificationStore } from "../_store/notificationStore"

import '@/styles/components/notifications-dropdown.scss'
import clsx from "clsx"

interface Props{
  handleClose: () => void
}

const NotificationsList: React.FC<Props> = ({ handleClose }) => {
  const { notifications, clearNotifications } = useNotificationStore((state: NotificationStore) => state)
  const ref = useRef<HTMLDivElement>(null)

  const handleClearNotifications = async () => {
    await clearNotifications()
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handleClose();
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [handleClose])

  return (
    <div className="c-notifications-dropdown" ref={ref}>
      <div className="c-notifications-dropdown__header">Notifications</div>

      <div className="c-notifications-dropdown__list">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification._id}
              className={clsx(
                "c-notifications-dropdown__item",
                !notification.read && 'no-read'
              )}
            >
              <p className={`title-${notification.type}`}>{notification.title}</p>
              <p>{notification.message}</p> 
            </div>
          ))
        ) : (
          <div className="c-notifications-dropdown__empty-message">
            <p>There is no notifications</p>
          </div>
        )}
      </div>

      {notifications.length > 0 && (
        <div className="c-notifications-dropdown__footer">
          <button onClick={handleClearNotifications}>Clear notifications</button>
        </div>
      )}
    </div>
  );
}

export default NotificationsList
