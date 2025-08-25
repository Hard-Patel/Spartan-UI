import React from "react";
import { UserAvatars } from "../showcase/AnimatedUserAvatars";

export const UserAvatarsPreview = () => {
  return (
    <UserAvatars
      users={[
        {
          id: 1,
          name: "Awesome User",
          image:
            "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920",
        },
        {
          id: 2,
          name: "Bob - The Builder",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QSTiahdKODtBSzMaIxXzFqzQCzLpBPqevQ&s",
        },
        {
          id: 3,
          name: "Charlie Chaplin",
          image:
            "https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI",
        },
        {
          id: 4,
          name: "Dumplin Dumb",
          image:
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290306179/original/ff5c3aa639fb416c50d2f1d1ecfb543cd214b5ac/do-ai-avatar-photos-up-to-30-photos.jpg",
        },
        {
          id: 5,
          name: "Erikson",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5wpf2PIQ4tg7oYDIc4MT_bs0YZ3fnJ8-rn1Vnc_bfBhuLoylP6Et58QhnTRC_9dq5vU&usqp=CAU",
        },
        {
          id: 6,
          name: "Ferguson",
          image:
            "https://imgv3.fotor.com/images/gallery/generate-a-realistic-ai-avatar-of-a-formal-man-in-fotor.jpg",
        },
      ]}
    />
  );
};
