import { UserAvatars } from "../showcase/AnimatedUserAvatars";

export const UserAvatarsPreview = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-4">Hover over specific user</p>
      <UserAvatars
        users={[
          {
            id: 1,
            name: "Awesome User",
            image: "https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/1.webp",
          },
          {
            id: 2,
            name: "Bob - The Builder",
            image: "https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/2.jpeg",
          },
          {
            id: 3,
            name: "Charlie Chaplin",
            image: "https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/3.png",
          },
          {
            id: 4,
            name: "Dumplin Dumb",
            image: "https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/4.jpg",
          },
          {
            id: 5,
            name: "Erikson",
            image: "https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/5.jpeg",
          },
          {
            id: 6,
            name: "Ferguson",
            image: "https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/6.webp",
          },
        ]}
      />
    </div>
  );
};
