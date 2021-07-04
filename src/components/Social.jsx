import React from "react";

const SocialShare = [
  {
    iconName: "linked-in",
    link: "https://www.linkedin.com/in/aaron-kang-0b7830192/",
  },
  { iconName: "github", link: "https://github.com/aaronkang7" },
  { iconName: "dribbble", link: "mailto:uk44@cornell.edu" },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
