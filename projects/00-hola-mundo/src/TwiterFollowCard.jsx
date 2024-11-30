import { useState } from "react";

export function TwiterFollowCard({
  username,
  name,
  initiallIsFolowing
}) {
  const [isFolowing, setIsFollowing] = useState(initiallIsFolowing);

  const text = isFolowing ? "Siguendo" : "Seguir";
  const buttonClassName = isFolowing
    ? "tw-follow-card-follow is-following"
    : "tw-follow-card-follow";

  const HandleClick = () => {
    setIsFollowing(!isFolowing);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          src={`https://unavatar.io/${username}`}
          alt="avatar"
        />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span className="tw-follow-info-span">
            @{username}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={HandleClick}>
          <span className="tw-follow-card-text">{text}</span>
          <span className="tw-follow-card-stop-follow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
