import { currentUser } from "@clerk/nextjs";

import UserCard from "../cards/UserCard";

import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUsers } from "@/lib/actions/user.actions";

async function RightSideBar() {
  const user = await currentUser();
  if (!user) return null;

  const suggestedUsers = await fetchUsers({ userId: user.id, pageSize: 4 });

  const suggestedCommunities = await fetchCommunities({ pageSize: 4 });

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start gap-12">
        <div>
          <h3 className="text-heading4-medium text-light-1 ">
            Communities You May Like!
          </h3>
          {suggestedCommunities.communities.length > 0 ? (
            <>
              {suggestedCommunities.communities.map((community) => (
                <UserCard
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  imgUrl={community.image}
                  personType="Community"
                  style="mt-6 hover:bg-dark-5 py-3 rounded-xl"
                />
              ))}
            </>
          ) : (
            <p className="!text-base-regular text-light-3">
              No communities yet
            </p>
          )}
        </div>

        {/* <div>
          <h3 className="text-heading4-medium text-light-1">Similar Minds</h3>

          {suggestedUsers.users.length > 0 ? (
            <>
              {suggestedUsers.users.map((user) => (
                <UserCard
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  username={user.username}
                  imgUrl={user.image}
                  personType="User"
                  style="mt-6 hover:bg-dark-5  py-3 rounded-xl"
                />
              ))}
            </>
          ) : (
            <p className="!text-base-regular text-light-3">No users yet</p>
          )}
        </div> */}
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Similar Minds</h3>

        {suggestedUsers.users.length > 0 ? (
          <>
            {suggestedUsers.users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                imgUrl={user.image}
                personType="User"
                style="mt-6 hover:bg-dark-5 py-3 rounded-xl"
              />
            ))}
          </>
        ) : (
          <p className="!text-base-regular text-light-3">No users yet</p>
        )}
      </div>
    </section>
  );
}

export default RightSideBar;
