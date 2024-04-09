"use client"
import { useState, type ButtonHTMLAttributes, type FC, EventHandler, MouseEventHandler } from "react";
import type { BaseComponent } from "../_interfaces/components";
import { useRouter } from "next/navigation";
import { useAlertContext } from "../_context/alertContext";
import { signout } from "../_actions/authActions";
import { followAuthor, unfollowAuthor } from "../_actions/featuresActions";
import { ArrowLeft } from "@phosphor-icons/react";

interface LogoutProps extends ButtonHTMLAttributes<HTMLButtonElement>{ 
  onClick?: () => void
}

export const Logout: FC<BaseComponent & LogoutProps> = ({ children, onClick, ...props }) => {
  const { setAlert } = useAlertContext(state => state)
  const { refresh } = useRouter();

  const handleSignOut = () => {
    signout();
    setAlert("success", "Log out");
    onClick?.()
    refresh();
  };

  return (
    <button onClick={handleSignOut} {...props}>
      {children}
    </button>
  )
}

interface FollowProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  follow: boolean;
  userId: string
}

export const Follow: FC<FollowProps> = ({ follow, userId, ...props }) => {
  const [isFollow, setIsFollow] = useState<boolean>(follow);

  const onFollow = async () => {
    const apiResponse = await followAuthor(userId);

    if (!apiResponse.success) return;

    setIsFollow(true);
  };

  const onUnfollow = async () => {
    const apiResponse = await unfollowAuthor(userId);

    if (!apiResponse.success) return;

    setIsFollow(false);
  };

  const handleFollowButton = async () => {
    if (isFollow) await onUnfollow();
    else await onFollow();
  };

  return (
    <button
      data-style={isFollow ? "secondary" : "primary"}
      onClick={handleFollowButton}
    >
      <span>{isFollow ? "Unfollow author" : "Follow author"}</span>
    </button>
  );
}

interface TopProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const BackToTop: FC<TopProps> = ({children, ...props}) => {
  const handleClick = () => {
    scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  )
}
