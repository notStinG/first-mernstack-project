import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <NotebookIcon className="size-16 text-base-content/40 mb-4" />
      <h3 className="text-2xl font-bold mb-2">No notes yet</h3>
      <p className="text-base-content/60 mb-4">Create your first note to get started</p>
      <Link to="/create" className="btn btn-primary">
        Create Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
