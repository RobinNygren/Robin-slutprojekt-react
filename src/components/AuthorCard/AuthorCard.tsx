import { AuthorCardProps } from "../../types/types";

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <div className="mx-2 flex-none w-30 bg-white p-4 shadow rounded-lg">
      <div className="text-center">
        <h3 className="text-lg font-bold">{author.name}</h3>
        <p>Works Count: {author.work_count}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
